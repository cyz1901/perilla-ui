<template>
	<n-layout>
		<n-layout-header>颐和园路</n-layout-header>
		<n-layout has-sider>
			<n-layout-sider bordered content-style="padding: 24px">
				<sidebar> </sidebar>
			</n-layout-sider>
			<n-layout-content content-style="padding: 24px">平山道</n-layout-content>
		</n-layout>
	</n-layout>
</template>
<script>
import { reactive } from '@vue/reactivity'
import Sidebar from '../components/Sidebar.vue'
export default {
	components: {
		Sidebar,
	},
	setup() {
		const menuOptions = reactive([
			{
				label: '且听风吟',
				key: 'hear-the-wind-sing',
			},
			{
				label: '1973年的弹珠玩具',
				key: 'pinball-1973',

				disabled: true,
				children: [
					{
						label: '鼠',
						key: 'rat',
					},
				],
			},
			{
				label: '寻羊冒险记',
				key: 'a-wild-sheep-chase',
				disabled: true,
			},
			{
				label: '舞，舞，舞',
				key: 'dance-dance-dance',

				children: [
					{
						type: 'group',
						label: '人物',
						key: 'people',
						children: [
							{
								label: '叙事者',
								key: 'narrator',
							},
							{
								label: '羊男',
								key: 'sheep-man',
							},
						],
					},
					{
						label: '饮品',
						key: 'beverage',

						children: [
							{
								label: '威士忌',
								key: 'whisky',
							},
						],
					},
					{
						label: '食物',
						key: 'food',
						children: [
							{
								label: '三明治',
								key: 'sandwich',
							},
						],
					},
					{
						label: '过去增多，未来减少',
						key: 'the-past-increases-the-future-recedes',
					},
				],
			},
		])

		return {
			menuOptions,
		}
	},
}
</script>
<style>
html {
	height: 100%;
}
body {
	height: 100%;
	margin: 0;
}
.n-layout {
	height: 100%;
}
.n-layout-header {
	height: 50px;
	background-color: #463c65;
}

.n-layout-sider {
	background: white;
	height: 100%;
}

.n-layout-content {
	background: white;
	height: 100%;
}
</style>
