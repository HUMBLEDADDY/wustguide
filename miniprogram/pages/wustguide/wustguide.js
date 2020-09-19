// pages/sxauguide/sxauguide.js
var click =true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 114.2662326495743,
    latitude: 30.439335828287103,
    scale:15,
    ishow:true,
    maomao: "Hey!Wuster!",
    maomaoposition: "maomao",
    bubbleposition: "bubble"
  },
  onLoad: function () {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
  },
  // 校门
  hx_door: function () {
    var that = this
    var flag = !that.data.hx_door
    var maomao
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_door){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
      maomao
    }
    this.setData({
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: flag,
      hx_canteen: false,
      maomao: "Hey!Wuster!",
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow:false,
      longitude: 114.26721800778196,
      latitude: 30.42944466788677,
      scale: 15,
      markers: [{
          iconPath: '../../images/hxLocation.png',
          latitude: 30.440492076207107,
          longitude: 114.26272700239184,//south
          width: 30,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 30.43441468375894,
          longitude: 114.26649818826678,//north
          width: 30,
          height: 30
        }]
    })
  },
  westerndoor: function () {
    this.setData({
      maomao: "武科大西门，宏伟的正门哦",
      longitude: 114.26648844692991,
      latitude: 30.434699080980735,
      scale: 15,
      markers: [{
          iconPath: '../../images/hxLocation.png',
          latitude: 30.440492076207107,
          longitude: 114.26272700239184,//south
          width: 30,
          height: 30
        }]
    })
  },
  southerndoor: function () {
    this.setData({
      maomao: "武科大南门，门外的小吃街是我的第二故乡",
      longitude:  114.26717241022871,
      latitude: 30.433320750006104,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43441468375894,
        longitude: 114.26649818826678,//north
        width: 30,
        height: 30
      }]
    })
  },
  // 餐厅
  hx_canteen: function () {
    var that = this
    var flag = !that.data.hx_canteen
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_canteen){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: flag,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      longitude: 114.26809240792082,
      latitude: 30.43315423890568,
      scale: 15,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43781881020978,
        longitude: 114.2632768552399,//south
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.441995178013904,
        longitude: 114.27099088836673,//north
        width: 30,
        height: 30
      }]
    })
  },
  northerncanteen: function () {
    this.setData({
      maomao: "北苑食堂，我的命是北苑食堂给的",
      longitude: 114.27212108586119,
      latitude: 30.439361210495605,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.441995178013904,
        longitude: 114.27099088836673,//north
        width: 30,
        height: 30
      }]
    })
  },
  southerncanteen: function () {
    this.setData({
      maomao: "南苑食堂，感谢南苑食堂让我发现北苑食堂的美好",
      longitude:  114.26461090061949,
      latitude: 30.436382653464435,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43781881020978,
        longitude: 114.2632768552399,//south
        width: 30,
        height: 30
      }]
    })
  },
  /******超市***/
  hx_supermarket: function () {
    var that = this
    var flag = !that.data.hx_supermarket
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_supermarket){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: flag,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      longitude: 114.27025963280485,
      latitude: 30.43312648702967,
      scale: 15,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //北苑超市
        latitude: 30.44181943192274, 
        longitude: 114.26945934701922,
        width: 30,
        height: 30
      }, 
      {
        iconPath: '../../images/hxLocation.png',   //北苑便利店
          latitude: 30.442281920954876, 
          longitude: 114.26923940588,
        width: 30,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //南苑便利店
          latitude: 30.435732871824065, 
          longitude: 114.2643577854729,
          width: 30,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //南苑超市
          latitude: 30.437111168708775, 
          longitude: 114.26377842832568,
          width: 30,
          height: 30
        }

      ]
    })
  },
  southernsupermarket: function () {
    this.setData({
      maomao: "北苑超市，旁边有家水果店",
      latitude: 30.440572957662354, 
      longitude: 114.26973928425596,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44181943192274,
        longitude: 114.26945934701922,
        width: 30,
        height: 30
      }]
    })
  },
  southernshop: function () {
    this.setData({
      maomao: "北苑便利店，平平常常小超市",
      latitude: 30.440572957662354, 
      longitude: 114.26973928425596,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442281920954876, 
        longitude: 114.26923940588,
        width: 30,
        height: 30
      }]
    })
  },
  northernsupermarket: function () {
    this.setData({
      maomao: "南苑超市，早上食堂人多可以在这里恰包子，针不戳",
      longitude: 114.26427562449263,
      latitude: 30.436350277346616,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.437111168708775, 
        longitude: 114.26377842832568,
        width: 30,
        height: 30
      }]
    })
  },
  northernshop: function () {
    this.setData({
      maomao: "南苑便利店，平平常常小超市",
      longitude:  114.26468332026289,
      latitude: 30.43502747240633,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435732871824065, 
        longitude: 114.2643577854729,
        width: 30,
        height: 30
      }]
    })
  },
  /****************************************教学楼***************************************** */
  hx_teach: function () {
    var that = this
    var flag = !that.data.hx_teach
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_teach){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: flag,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      longitude: 114.2659090897827,
      latitude: 30.43704867411749,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //教学楼1
        latitude: 30.440237702843845,
        longitude: 114.26444361616137,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //教学楼2
        latitude: 30.44174080856934,
        longitude: 114.26479766775134,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //楼3
          latitude: 30.438540321752487,
          longitude: 114.26429609466555,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //楼4
          latitude: 30.44089444727414,
          longitude: 114.26362822462085,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //楼5
          latitude: 30.439964828859395,
          longitude: 114.26349947858813,
        width: 30,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //楼6
          latitude: 30.442601037114116,
          longitude: 114.26578472066882,
          width: 30,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //楼7
          latitude: 30.43699091539755,
          longitude: 114.26516513038638,
          width: 30,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //楼8
          latitude: 30.436528401266337,
          longitude: 114.26616291213992,
          width: 30,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //楼9
          latitude: 30.437740183635594,
          longitude: 114.26593760658267,
          width: 30,
          height: 30
        }

      ]
    })
  },
  j1: function () {
    this.setData({
      maomao: "恒大楼,感谢许家印老铁送出的两个亿",
      latitude: 30.438824706938398, 
      longitude: 114.26556040261076,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.440237702843845,
        longitude: 114.26444361616137,
        width: 30,
        height: 30
      }]
    })
  },
  j2: function () {
    this.setData({
      maomao: "教二,理学院,我永远爱高数",
      longitude: 114.26548530075834,
      latitude: 30.440508208190778,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44174080856934,
        longitude: 114.26479766775134,
        width: 30,
        height: 30
      }]
    })
  },
  j3: function () {
    this.setData({
      maomao: "教三，计算机学院，诶我头发呢",
      longitude:  114.26567841980741,
      latitude: 30.4369561715157,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.438540321752487,
        longitude: 114.26429609466555,
        width: 30,
        height: 30
      }]
    })
  },
  j4: function () {
    this.setData({
      maomao: "教四，外国语学院，马克思主义学院，",
      latitude: 30.439546211035324, 
      longitude: 114.26463772270964,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44089444727414,
        longitude: 114.26362822462085,
        width: 30,
        height: 30
      }]
    })
  },
  j5: function () {
    this.setData({
      maomao: "教五，城建学院，艺设学院",
      longitude: 114.26449824784086,
      latitude: 30.43815869842025,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.439964828859395,
        longitude: 114.26349947858813,
        width: 30,
        height: 30
      }]
    })
  },
  j6: function () {
    this.setData({
      maomao: "教六，医学院，扶我起来，我还能学",
      longitude:  114.2663972518234,
      latitude: 30.441266699257422,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442601037114116,
        longitude: 114.26578472066882,
        width: 30,
        height: 30
      }]
    })
  },
  j7: function () {
    this.setData({
      maomao: "教七，逸夫楼，土豪楼1号，武科大亲儿子",
      latitude: 30.43566112595903, 
      longitude: 114.26668693039701,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43699091539755,
        longitude: 114.26516513038638,
        width: 30,
        height: 30
      }]
    })
  },
  j8: function () {
    this.setData({
      maomao: "教八，恒大管理学院，土豪楼2号，武科大亲儿子",
      latitude: 30.43566112595903, 
      longitude: 114.26668693039701,
      scale: 17,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.436528401266337,
        longitude: 114.26616291213992,
        width: 30,
        height: 30
      }]
    })
  },
  j9: function () {
    this.setData({
      maomao: "教九，生命与健康学院，土豪楼3号，武科大亲儿子",
      latitude: 30.43566112595903, 
      longitude: 114.26668693039701,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.437740183635594,
        longitude: 114.26593760658267,
        width: 30,
        height: 30
      }]
    })
  },

  /****************************************医 务 室***************************************** */
  hx_hospital: function () {
    var that = this
    var flag = !that.data.hx_hospital
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_hospital){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: flag,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      longitude: 114.26569620777133,
      latitude: 30.44105632022437,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443095896332686,
        longitude: 114.26438460756304,
        width: 30,
        height: 30
      }]
    })
  },
  hospital: function () {
    this.setData({
      maomao: "校医院，不舒服的话记得带学生卡去挂号",
      latitude: 30.442076058217133, 
      longitude: 114.26510710928724,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443095896332686,
        longitude: 114.26438460756304,
        width: 30,
        height: 30
      }]
    })
  },
  /****************************************农大 体 育 场***************************************** */
  hx_playground: function () {
    var that = this
    var flag = !that.data.hx_playground
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_playground){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: flag,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      longitude: 114.2716919324188,
      latitude: 30.433306874094576,
      scale: 15,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442147799367746,  /**北操场 */
        longitude: 114.2728764813042,
        width: 30,
        height: 30
      },
      {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435980263783573,
        longitude: 114.26590104315565,   /**南操场 */
        width: 30,
        height: 30
      }]
    })
  },
  southernplayground: function () {
    this.setData({
      maomao: "北苑操场，run！run！run！",
      latitude: 30.440670081783452, 
      longitude: 114.27378405545042,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442147799367746,  /**北操场 */
        longitude: 114.2728764813042,
        width: 30,
        height: 30
      }]
    })
  },
  northernplayground: function () {
    this.setData({
      maomao: "南苑操场，rush！rush！rush！",
      latitude: 30.43377865407223, 
      longitude: 114.26684786293791,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435980263783573,
        longitude: 114.26590104315565,   /**南操场 */
        width: 30,
        height: 30
      }]
    })
  },
  /****************************************农大 图 书 馆***************************************** */
  hx_library: function () {
    var that = this
    var flag = !that.data.hx_library
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_library){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      maomao: "Hey!Wuster!",
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: flag,
      hx_dorm: false,
      ishow: false,
      longitude: 114.26851351473616,
      latitude: 30.436632411743748,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.4376199310992566,  /**图书馆 */
        longitude: 114.266962210426369,
        width: 30,
        height: 30
      }]
    })
  },
  libary: function () {
    this.setData({
      maomao: "图书馆，不会吧不会吧，不会有wuster不喜欢泡图书馆吧",
      longitude: 114.26851351473616,
      latitude: 30.436632411743748,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.4376199310992566,  /**图书馆 */
        longitude: 114.266962210426369,
        width: 30,
        height: 30
      }]
    })
  },
  /****************************************农大 宿 舍***************************************** */
  hx_dorm: function () {
    var that = this
    var flag = !that.data.hx_dorm
    var maomaoposition = "maomaoon"
    var bubbleposition = "bubbleon"
    if(that.data.hx_dorm){
      maomaoposition = "maomao"
      bubbleposition = "bubble"
    }
    this.setData({
      maomao: "Hey!Wuster!",
      maomaoposition: maomaoposition,
      bubbleposition: bubbleposition,
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: flag,
      ishow: false,
      longitude: 114.27056540463255,
      latitude: 30.44045270861221,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44195817887032,  /**b1 */
        longitude: 114.26880488801959,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.442355919005973,   /**b2 */
          longitude: 114.26883707452777,
        width:30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.442758282375983,   /**b3 */
          longitude: 114.26865468431475,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.443095896336224,   /**b4 */
          longitude: 114.26860640455249,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.4433918856956641,  /**b5*/
          longitude: 114.26901410032275,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.44193505439505,  /**b6 */
          longitude: 114.26920185495379,
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44223567216056,  /**b7 */
        longitude:114.26925549913409,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.442619536575034,   /**b8 */
          longitude: 114.269598821888,
        width:30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.442994149787353,   /**b9 */
          longitude: 114.26942716051104,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.443327138100972,   /**b10 */
          longitude: 114.26941643167498,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.442087675839726,  /**b11*/
          longitude: 114.26741550374987,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.44252703926553,  /**b12 */
          longitude: 114.26750133443835,
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
          latitude: 30.44288315343155,  /**b13 */
          longitude: 114.26756570745471,
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443262390463964,  /**b14 */
        longitude:114.26764080930712,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.443600002678256,   /**b15 */
          longitude: 114.2676729958153,
        width:30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.437060292335893,   /**n1 */
          longitude: 114.26362822462085,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.436736532904593,   /**n2 */
          longitude: 114.26362822462085,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.436181514235926,  /**n3*/
          longitude: 114.26368186880114,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.435830000778488,  /**n4 */
          longitude: 114.263617495784795,
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43539523238102,  /**n5 */
        longitude:114.26383207250598,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.4350437160894,   /**n6 */
          longitude:114.26362286020282,
        width:30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.434733825676986,   /**n7 */
          longitude: 114.26364968229296,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.436542276730883,   /**n8 */
          longitude: 114.26457236219409,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.43618613940615,  /**n9*/
          longitude: 114.26449189592364,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.435792999289816,  /**n10 */
          longitude: 114.26433632780078,
        width: 30,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435385981970136,  /**n11 */
        longitude:114.26432023454669,
        width: 30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.43502058997477,   /**n12 */
          longitude: 114.26423976827624,
        width:30,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 30.43468757329284,   /**n13 */
          longitude: 114.26422903944018,
        width: 30,
        height: 30
      }

      ]
    })
  },
  b1: function () {
    this.setData({
      maomao: "北一宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44195817887032,  /**b1 */
        longitude: 114.26880488801959,
        width: 30,
        height: 30
      }]
    })
  },
  b2: function () {
    this.setData({
      maomao: "北二宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442355919005973,   /**b2 */
        longitude: 114.26883707452777,
        width: 30,
        height: 30
      }]
    })
  },
  b3: function () {
    this.setData({
      maomao: "北三宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442758282375983,   /**b3 */
        longitude: 114.26865468431475,
        width: 30,
        height: 30
      }]
    })
  },
  b4: function () {
    this.setData({
      maomao: "北四宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443095896336224,   /**b4 */
        longitude: 114.26860640455249,
        width: 30,
        height: 30
      }]
    })
  },
  b5: function () {
    this.setData({
      maomao: "北五宿舍，zzz~",
      latitude: 30.442344301422818, 
      longitude: 114.26940132592009,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.4433918856956641,  /**b5*/
        longitude: 114.26901410032275,
        width: 30,
        height: 30
      }]
    })
  },
  b6: function () {
    this.setData({
      maomao: "北六宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44193505439505,  /**b6 */
        longitude: 114.26920185495379,
        width: 30,
        height: 30
      }]
    })
  },
  b7: function () {
    this.setData({
      maomao: "北七宿舍，zzz~",
      latitude: 30.441151076006616, 
      longitude: 114.2697821996002,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44223567216056,  /**b7 */
        longitude:114.26925549913409,
        width: 30,
        height: 30
      }]
    })
  },
  b8: function () {
    this.setData({
      maomao: "北八宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442619536575034,   /**b8 */
        longitude: 114.269598821888,
        width: 30,
        height: 30
      }]
    })
  },
  b9: function () {
    this.setData({
      maomao: "北九宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442994149787353,   /**b9 */
        longitude: 114.26942716051104,
        width: 30,
        height: 30
      }]
    })
  },
  b10: function () {
    this.setData({
      maomao: "北十宿舍，zzz~",
      latitude: 30.440744081050664, 
      longitude: 114.26923234675215,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443327138100972,   /**b10 */
        longitude: 114.26941643167498,
        width: 30,
        height: 30
      }]
    })
  },
  b11: function () {
    this.setData({
      maomao: "北十一宿舍，zzz~",
      latitude: 30.4413591977707, 
      longitude: 114.26912237618254,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.442087675839726,  /**b11*/
        longitude: 114.26741550374987,
        width: 30,
        height: 30
      }]
    })
  },
  b12: function () {
    this.setData({
      maomao: "北十二宿舍，zzz~",
      latitude: 30.4413591977707, 
      longitude: 114.26912237618254,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44252703926553,  /**b12 */
        longitude: 114.26750133443835,
        width: 30,
        height: 30
      }]
    })
  },
  b13: function () {
    this.setData({
      maomao: "北十三宿舍，zzz~",
      latitude: 30.4413591977707, 
      longitude: 114.26912237618254,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.44288315343155,  /**b13 */
        longitude: 114.26756570745471,
        width: 30,
        height: 30
      }]
    })
  },
  b14: function () {
    this.setData({
      maomao: "北十四宿舍，zzz~",
      latitude: 30.4413591977707, 
      longitude: 114.26912237618254,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443262390463964,  /**b14 */
        longitude:114.26764080930712,
        width: 30,
        height: 30
      }]
    })
  },
  b15: function () {
    this.setData({
      maomao: "北十五宿舍，zzz~",
      latitude: 30.4413591977707, 
      longitude: 114.26912237618254,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.443600002678256,   /**b15 */
        longitude: 114.2676729958153,
        width: 30,
        height: 30
      }]
    })
  },
  n1: function () {
    this.setData({
      maomao: "南一宿舍，zzz~",
      latitude: 30.43493034266723, 
      longitude: 114.2644687435417,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.437060292335893,   /**n1 */
        longitude: 114.26362822462085,
        width: 30,
        height: 30
      }]
    })
  },
  n2: function () {
    this.setData({
      maomao: "南二宿舍，zzz~",
      latitude: 30.43493034266723, 
      longitude: 114.2644687435417,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.436736532904593,   /**n2 */
        longitude: 114.26362822462085,
        width: 30,
        height: 30
      }]
    })
  },
  n3: function () {
    this.setData({
      maomao: "南三宿舍，zzz~",
      latitude: 30.43493034266723, 
      longitude: 114.2644687435417,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.436181514235926,  /**n3*/
        longitude: 114.26368186880114,
        width: 30,
        height: 30
      }]
    })
  },
  n4: function () {
    this.setData({
      maomao: "南四宿舍，zzz~",
      latitude: 30.43493034266723, 
      longitude: 114.2644687435417,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435830000778488,  /**n4 */
        longitude: 114.263617495784795,
        width: 30,
        height: 30
      }]
    })
  },
  n5: function () {
    this.setData({
      maomao: "南五宿舍，zzz~",
      latitude: 30.43493034266723, 
      longitude: 114.2644687435417,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43539523238102,  /**n5 */
        longitude:114.26383207250598,
        width: 30,
        height: 30
      }]
    })
  },
  n6: function () {
    this.setData({
      maomao: "南六宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.4350437160894,   /**n6 */
        longitude:114.26362286020282,
        width: 30,
        height: 30
      }]
    })
  },
  n7: function () {
    this.setData({
      maomao: "南七宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.434733825676986,   /**n7 */
        longitude: 114.26364968229296,
        width: 30,
        height: 30
      }]
    })
  },
  n8: function () {
    this.setData({
      maomao: "南八宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.436542276730883,   /**n8 */
        longitude: 114.26457236219409,
        width: 30,
        height: 30
      }]
    })
  },
  n9: function () {
    this.setData({
      maomao: "南九宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43618613940615,  /**n9*/
        longitude: 114.26449189592364,
        width: 30,
        height: 30
      }]
    })
  },
  n10: function () {
    this.setData({
      maomao: "南十宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435792999289816,  /**n10 */
        longitude: 114.26433632780078,
        width: 30,
        height: 30
      }]
    })
  },
  n11: function () {
    this.setData({
      maomao: "南十一宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.435385981970136,  /**n11 */
        longitude:114.26432023454669,
        width: 30,
        height: 30
      }]
    })
  },
  n12: function () {
    this.setData({
      maomao: "南十二宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43502058997477,   /**n12 */
        longitude: 114.26423976827624,
        width: 30,
        height: 30
      }]
    })
  },
  n13: function () {
    this.setData({
      maomao: "南十三宿舍，zzz~",
      latitude: 30.434319810650358, 
      longitude: 114.2641817471771,
      scale: 17,
      markers: [ {
        iconPath: '../../images/hxLocation.png',
        latitude: 30.43468757329284,   /**n13 */
        longitude: 114.26422903944018,
        width: 30,
        height: 30
      }]
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

  },
  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*农大校门门*/
      case "westerndoor":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.440492076207107,
          longitude: 114.26272700239184,//south
          scale: 25
        })
        break;
      case "southerndoor":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.43441468375894,
          longitude: 114.26649818826678,//north
          scale: 25
        })
        break;
      case "northerncanteen":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.441995178013904,
          longitude: 114.27099088836673,//north
          scale: 25
        })
        break;
      case "southerncanteen":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.43781881020978,
        longitude: 114.2632768552399,//south
          scale: 25
        })
        break;
      case "southernsupermarket":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.44181943192274,
          longitude: 114.26945934701922,
          scale: 25
        })
        break;

      /*农大餐饮*/
      case "southernshop":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.442281920954876, 
          longitude: 114.26923940588,
          scale: 25
        })
        break;
      case "northernsupermarket":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.437111168708775, 
          longitude: 114.26377842832568,
          scale: 25
        })
        break;
      case "northernshop":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.435732871824065, 
          longitude: 114.2643577854729,
          scale: 25
        })
        break;
      case "j1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.440237702843845,
          longitude: 114.26444361616137,
          scale: 25
        })
        break;
      case "j2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.44174080856934,
          longitude: 114.26479766775134,
          scale: 25
        })
        break;
      
      /*农大超市*/
      case "j3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.438540321752487,
          longitude: 114.26429609466555,
          scale: 25
        })
        break;
      case "j4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.44089444727414,
          longitude: 114.26362822462085,
          scale: 25
        })
        break;
      case "j5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.439964828859395,
          longitude: 114.26349947858813,
          scale: 25
        })
        break;




      /**农大教学楼 */
      case "j6":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.442601037114116,
          longitude: 114.26578472066882,
          scale: 25
        })
        break;
      case "j7":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.43699091539755,
          longitude: 114.26516513038638,
          scale: 25
        })
        break;
      case "j8":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.436528401266337,
          longitude: 114.26616291213992,
          scale: 25
        })
        break;
      case "j9":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.437740183635594,
          longitude: 114.26593760658267,
          scale: 25
        })
        break;
      case "hospital":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.443095896332686,
          longitude: 114.26438460756304,
          scale: 25
        })
        break;
      case "southernplayground":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.442147799367746,  /**北操场 */
          longitude: 114.2728764813042,
          scale: 25
        })
        break;
      case "northernplayground":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.435980263783573,
          longitude: 114.26590104315565,   /**南操场 */
          scale: 25
        })
        break;
      case "libary":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.4376199310992566,  /**图书馆 */
          longitude: 114.266962210426369,
          scale: 25
        })
        break;
      case "b1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.44195817887032,  /**b1 */
          longitude: 114.26880488801959,
          scale: 25
        })
        break;
      case "b2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.442355919005973,   /**b2 */
          longitude: 114.26883707452777,
          scale: 25
        })
        break;
      case "b3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.442758282375983,   /**b3 */
          longitude: 114.26865468431475,
          scale: 25
        })
        break;
      case "b4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.443095896336224,   /**b4 */
          longitude: 114.26860640455249,
          scale: 25
        })
        break;
      case "b5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 30.4433918856956641,  /**b5*/
          longitude: 114.26901410032275,
          scale: 25
        })
        break;
      /**农大医务室 */
      case "b6":
        wx.openLocation({
          latitude: 30.44193505439505,  /**b6 */
          longitude: 114.26920185495379,
          scale: 25
        })
        break;
      /**农大体育场 */
      case "b7":
        wx.openLocation({
          latitude: 30.44223567216056,  /**b7 */
          longitude:114.26925549913409,
          scale: 25
        })
        break;
      case "b8":
        wx.openLocation({
          latitude: 30.442619536575034,   /**b8 */
          longitude: 114.269598821888,
          scale: 25
        })
        break;
      /**农大图书馆*/
      case "b9":
        wx.openLocation({
          latitude: 30.442994149787353,   /**b9 */
          longitude: 114.26942716051104,
          scale: 25
        })
        break;
      case "b10":
        wx.openLocation({
          latitude: 30.443327138100972,   /**b10 */
          longitude: 114.26941643167498,
          scale: 25
        })
        break;


      /**农大宿舍楼*/
      case "b11":
        wx.openLocation({
          latitude: 30.442087675839726,  /**b11*/
          longitude: 114.26741550374987,
          scale: 25
        })
        break;
      case "b12":
        wx.openLocation({
          latitude: 30.44252703926553,  /**b12 */
          longitude: 114.26750133443835,
          scale: 25
        })
        break;
      case "b13":
        wx.openLocation({
          latitude: 30.44288315343155,  /**b13 */
          longitude: 114.26756570745471,

          scale: 25
        })
        break;
      case "b14":
        wx.openLocation({
          latitude: 30.443262390463964,  /**b14 */
          longitude:114.26764080930712,
          scale: 25
        })
        break;
      case "b15":
        wx.openLocation({
          latitude: 30.443600002678256,   /**b15 */
          longitude: 114.2676729958153,
          scale: 25
        })
        break;
        case "n1":
          wx.openLocation({
            latitude: 30.437060292335893,   /**n1 */
            longitude: 114.26362822462085,
            scale: 25
          })
          break;
          case "n2":
            wx.openLocation({
              latitude: 30.436736532904593,   /**n2 */
              longitude: 114.26362822462085,
              scale: 25
            })
            break;
            case "n3":
            wx.openLocation({
              latitude: 30.436181514235926,  /**n3*/
              longitude: 114.26368186880114,
              scale: 25
            })
            break;
          case "n4":
            wx.openLocation({
              latitude: 30.435830000778488,  /**n4 */
              longitude: 114.263617495784795,
              scale: 25
            })
            break;
            case "n5":
              wx.openLocation({
                latitude: 30.43539523238102,  /**n5 */
                longitude:114.26383207250598,
                scale: 25
              })
              break;
            case "n6":
              wx.openLocation({
                latitude: 30.4350437160894,   /**n6 */
                longitude:114.26362286020282,
                scale: 25
              })
              break;
            case "n7":
              wx.openLocation({
                latitude: 30.434733825676986,   /**n7 */
                longitude: 114.26364968229296,
                scale: 25
              })
              break;
            case "n8":
              wx.openLocation({
                latitude: 30.436542276730883,   /**n8 */
                longitude: 114.26457236219409,
                scale: 25
              })
              break;
            case "n9":
              wx.openLocation({
                latitude: 30.43618613940615,  /**n9*/
                longitude: 114.26449189592364,
                scale: 25
              })
              break;
              case "n10":
                wx.openLocation({
                  latitude: 30.435792999289816,  /**n10 */
                  longitude: 114.26433632780078,
                  scale: 25
                })
                break;
                case "n11":
                wx.openLocation({
                  latitude: 30.435385981970136,  /**n11 */
                  longitude:114.26432023454669,
                  scale: 25
                })
                break;
                case "n12":
                  wx.openLocation({
                    latitude: 30.43502058997477,   /**n12 */
                    longitude: 114.26423976827624,
                    scale: 25
                  })
                  break;
                  case "n13":
                  wx.openLocation({
                    latitude: 30.43468757329284,   /**n13 */
                    longitude: 114.26422903944018,
                    scale: 25
                  })
                  break;
              
             
    }
  }
})