package com.bootdo.common.controller;

import com.bootdo.common.controller.BaseController;
import com.bootdo.common.utils.R;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Dashboard Controller - 后台仪表盘统计数据
 *
 * @author bootdo
 */
@RequestMapping("/dashboard")
@Controller
public class DashboardController extends BaseController {

    /**
     * 获取最近7天访问趋势数据
     * GET /dashboard/trend
     * 返回格式: { code: 0, dates: ["12-25", ...], counts: [820, ...] }
     */
    @ResponseBody
    @GetMapping("/trend")
    public R getTrendData() {
        List<String> dates = new ArrayList<>();
        List<Integer> counts = new ArrayList<>();

        SimpleDateFormat sdf = new SimpleDateFormat("MM-dd");
        Calendar cal = Calendar.getInstance();

        // 模拟数据
        int[] mockCounts = {820, 932, 901, 934, 1290, 1330, 1320};

        for (int i = 6; i >= 0; i--) {
            cal.add(Calendar.DAY_OF_MONTH, -i);
            dates.add(sdf.format(cal.getTime()));
            cal.add(Calendar.DAY_OF_MONTH, i);
            counts.add(mockCounts[6 - i]);
        }

        return R.ok()
                .put("dates", dates)
                .put("counts", counts);
    }

    /**
     * 获取博客分类统计数据
     * GET /dashboard/distribution
     * 返回格式: { code: 0, names: [...], values: [...], colors: [...] }
     */
    @ResponseBody
    @GetMapping("/distribution")
    public R getDistributionData() {
        List<String> names = Arrays.asList("技术文章", "生活随笔", "学习笔记", "项目经验");
        List<Integer> values = Arrays.asList(428, 356, 289, 211);
        List<String> colors = Arrays.asList("#3B82F6", "#10B981", "#F59E0B", "#6366F1");

        return R.ok()
                .put("names", names)
                .put("values", values)
                .put("colors", colors);
    }
}
