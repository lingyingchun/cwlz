class dataText{
     //轮播图数据
     	bannerList(){
     		var list=[{
     				image: '../../static/images/banner1.png',
     			},{	
     				image: '../../static/images/banner2.png',
     			},{
     				image: '../../static/images/banner3.png'
     			}];
     		return list;
     	};
		//我的页面  菜单
		myImgList(){
			var list=[{
				image: '../../../static/images/banner1.png',
			},{
				image: '../../../static/images/banner2.png',
			},{
				image: '../../../static/images/banner3.png'
			}]
			return list;
		}
}
export default dataText;