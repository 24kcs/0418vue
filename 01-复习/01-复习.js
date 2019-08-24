/**
 * 
 * 
 * 复习:
 * 数组的排序遍历
 * sort()方法,MDN中的语法中可以传入一个函数,函数作用就是比较,sort方法内部是有遍历
 * 
 * 
 * 
 * 数组排序,sort()方法直接调用,有可能不会进行排序的,建议:最好传入一个回调函数,可以对字符串(一般都是指的是字母)进行排序
 * arr.sort((a,b)=>{
 *  if(a>b){
 *    return 1
 *  }else if(a<b){
 *    return -1
 *  }else{
 *    return 0
 *  }
 * 
 * })
 * 
 * 'abc' 'acb'----ASSIC码
 * 
 * 1.
 * 事件的修饰符:prevent----阻止默认行为,stop----阻止事件冒泡
 * 按键的修饰符:.enter----.13
 * 2.
 *  自定义指令:全局的自定义指令和局部的自定义指令
 * Vue.directive()
 * 在Vue的实例对象中directives中方法定义指令
 * '指令名字'(el,binding){} el就是使用该指令的元素,binding是对象,里面可以使用value属性,来获取该标签的中间的内容,进行设置
 * 注意:自定义指令的时候没有v-开头,但是使用指令的时候,需要自己加v-开头
 * 3.
 *  自定义插件,
 * 1.自定义插件必须使用install 方法进行暴露
 * 2.自定义插件中一般都会有一个全局方法和一个实例方法,
 * 3.自定义插件中可以有自定义指令的存在
 * 4.插件在使用的时候,一定要Vue.use()声明使用
 * 
 * 4.
 * 生命周期 :Vue生命周期4个阶段,开始--->挂载----->更新---->结束
 * 每个阶段有两个函数
 * beforeCreate()
 * created()
 * beforeMount()
 * mounted()
 * beforeUpdate()
 * updated()
 * beforeDestroy()
 * destroyed()
 * 
 * 5.
 * 过渡和动画
 * 共同点：把需要有过渡或者是动画的标签使用transition进行包裹,transition实际上是vue中内置的一个组件,需要有name属性
 * 在style标签中设置
 * .fade-enter
 * .fade-enter-active
 * .fade-enter-to
 * 
 * .fade-leave
 * .fade-leave-active
 * .fade-leave-to
 * 
 * .fade-enter-active,.fade-leave-active{}
 * .fade-enter,.fade-leave-to{}
 * 
 * Vue中1.x版本中系统自带的过滤器,2.x中需要自己定义了
 * Vue.filter('过滤器的名字',回调函数)-----引入moment实现日期的格式化
 * 
 * Vue中的指令:
 * v-bind---->强制绑定数据,用在普通的属性上,----->  :
 * v-model--->双向数据绑定,一般用在表单标签上
 * v-on------>事件的绑定------>  @
 * v-if/v-else/v-else-if-----操作元素是否在DOM树上,主要就是显示或者隐藏
 * v-show------显示或者隐藏----DOM树中一直存在
 * v-for----遍历数据,(item,index) in 数组------> item in 数组:前两个遍历的是数组-----(value,key,index) in 对象---->遍历的是对象
 * v-text--->相当于innerText或者textContent
 * v-html--->相当于innerHTML----用这个
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */