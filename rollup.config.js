import html from 'rollup-plugin-html'
import less from 'rollup-plugin-less';

export default {
    input: 'src/main.js',
    output: {
        file: './demo/xiaoM.js',
        format: 'umd',
        name: 'XiaoM'
    },
    plugins: [
        html({
            include : "**/*.html"
        }),
        less()
    ]
};