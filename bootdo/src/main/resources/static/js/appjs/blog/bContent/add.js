// Editor.md 实例
var editor;

$().ready(function() {
	console.log('[Editor.md] Initializing...');

	// 检查必要的依赖是否加载
	if (typeof $ === 'undefined') {
		console.error('[Editor.md] jQuery not loaded!');
		showAlert('编辑器初始化失败: jQuery 未加载');
		return;
	}

	if (typeof CodeMirror === 'undefined') {
		console.error('[Editor.md] CodeMirror not loaded!');
		showAlert('编辑器初始化失败: CodeMirror 未加载');
		return;
	}

	if (typeof editormd === 'undefined') {
		console.error('[Editor.md] Editor.md library not loaded!');
		showAlert('编辑器库加载失败，请检查网络连接或刷新页面重试。');
		return;
	}

	console.log('[Editor.md] All dependencies loaded successfully');

	// 检查容器是否存在
	var $container = $("#editormd-container");
	if ($container.length === 0) {
		console.error('[Editor.md] Container element not found!');
		showAlert('编辑器容器未找到');
		return;
	}

	// 初始化 Editor.md - 使用最简配置
	try {
		var editorConfig = {
			width: "100%",
			height: "100%",  // 使用100%高度以适应容器
			path: "/js/plugins/editor.md-master/lib/",
			theme: "default",
			previewTheme: "default",
			editorTheme: "default",
			markdown: "",
			codeFold: false,
			saveHTMLToTextarea: true,
			searchReplace: false,
			htmlDecode: false,
			emoji: false,
			taskList: true,
			// tocm: false,  // 禁用 - 需要额外的库文件
			// tex: false,   // 禁用 - 需要KaTeX库
			flowChart: false,  // 禁用 - 可能导致加载问题
			sequenceDiagram: false,  // 禁用 - 可能导致加载问题
			watch: true,  // 启用实时预览
			toolbar: true,  // 保留工具栏
			imageUpload: false,  // 暂时禁用图片上传
			autoLoadModules: false,  // 禁用自动加载模块，防止竞态条件
			onload: function() {
				console.log('[Editor.md] Initialization completed successfully');
				// 验证编辑器功能正常
				if (typeof this.getMarkdown !== 'function') {
					console.error('[Editor.md] Editor not functional after initialization');
					showAlert('编辑器初始化后无法正常工作');
					return;
				}
			},
			onerror: function(err) {
				console.error('[Editor.md] Initialization error:', err);
				showAlert('编辑器初始化失败: ' + (err.message || '未知错误'));
			}
		};

		console.log('[Editor.md] Creating editor with config:', editorConfig);

		editor = editormd("editormd-container", editorConfig);

		// 验证编辑器实例已创建
		if (!editor || typeof editor.getMarkdown !== 'function') {
			throw new Error('Editor instance creation failed');
		}

		console.log('[Editor.md] Editor instance created:', editor);

	} catch(e) {
		console.error('[Editor.md] Initialization failed with exception:', e);
		console.error('[Editor.md] Stack trace:', e.stack);
		showAlert('编辑器初始化失败: ' + e.message);

		// 显示诊断信息
		console.group('[Editor.md] Diagnostic Information');
		console.log('jQuery version:', $.fn.jquery);
		console.log('CodeMirror available:', typeof CodeMirror !== 'undefined');
		console.log('Editor.md available:', typeof editormd !== 'undefined');
		console.log('Container element:', $container[0]);
		console.groupEnd();
	}

	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		save(1);  // 默认保存为发布状态
	}
});

function save(status) {
	$("#status").val(status);

	// 获取 Markdown 源内容
	var markdownContent = editor.getMarkdown();
	// 获取渲染后的 HTML 内容
	var htmlContent = editor.getHTML();

	// 填充到隐藏字段
	$("#contentMarkdown").val(markdownContent);
	$("#content").val(htmlContent);

	$.ajax({
		cache : true,
		type : "POST",
		url : "/blog/bContent/save",
		data : $('#signupForm').serialize(),
		async : false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(data) {
			if (data.code == 0) {
				parent.layer.msg("操作成功");
				parent.reLoad();
			} else {
				parent.layer.alert(data.msg)
			}
		}
	});
}

function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
			title : {
				required : true
			}
		},
		messages : {
			title : {
				required : icon + "请输入文章标题"
			}
		}
	});
}

function returnList() {
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

// 辅助函数：用户友好的错误提示
function showAlert(message) {
	if (typeof layer !== 'undefined' && layer.msg) {
		layer.msg(message, {icon: 2});
	} else {
		alert(message);
	}
}
