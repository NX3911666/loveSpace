Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'sdf',
    LoveTime:'',
    endTime: 0,
    userlist:[
      {
        id:1,
        username:'喜洋洋',
        userImage: '/assets/images/avatar1.jpg',
      },
      {
        id:2,
        username:'美洋洋',
        userImage: '/assets/images/avatar2.jpg',
      },
    ],
    photoList:[
      '/assets/images/avatar1.jpg',
      '/assets/images/avatar2.jpg',
      '/assets/images/avatar1.jpg',
      '/assets/images/avatar2.jpg',
      '/assets/images/avatar1.jpg',
      '/assets/images/avatar2.jpg',
      '/assets/images/avatar1.jpg',
      '/assets/images/avatar2.jpg',
      '/assets/images/avatar1.jpg',
      '/assets/images/avatar2.jpg',
    ],
    plans:{
      plan:[
        {
          id:1,
          planTime: "21/12",
          planendTime: "21/32",
          plancontent: "下周去吃火锅",
        },
        {
          id:2,
          planTime: "21/12",
          planendTime: "21/32",
          plancontent: "赚钱",
        },
        {
          id:3,
          planTime: "21/12",
          planendTime: "21/32",
          plancontent: "下周去吃火锅",
        },
        {
          id:4,
          planTime: "21/12",
          planendTime: "21/32",
          plancontent: "赚钱",
        },
        {
          id:5,
          planTime: "21/12",
          planendTime: "21/32",
          plancontent: "下周去吃火锅",
        },
      ]
    },
    leaves:{
      leave:[
        {
          id:1,
          leaveTime: "33/21",
          leaveEndTime: "32/21",
          leavecontent: "留言1"
        },
        {
          id:2,
          leaveTime: "33/21",
          leaveEndTime: "32/21",
          leavecontent: "留言2"
        },
        {
          id:3,
          leaveTime: "33/21",
          leaveEndTime: "32/21",
          leavecontent: "留言1"
        },
        {
          id:4,
          leaveTime: "33/21",
          leaveEndTime: "32/21",
          leavecontent: "留言2"
        },
        {
          id:5,
          leaveTime: "33/21",
          leaveEndTime: "32/21",
          leavecontent: "留言1"
        },
      ]
    }
  },
  clickleave(e){
    console.log("点击+1",e.target.dataset);
  },
  uploadFile(){
    wx.chooseMedia({
      count: 1,
      success(res){
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})