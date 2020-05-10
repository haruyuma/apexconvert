window:onload = () => (function(){
    new Vue({
        el:'#app',
        data:{
            AV:[
                {name:'F1.0', value:0}, 
                {name:'F1.4', value:1}, 
                {name:'F2',   value:2}, 
                {name:'F2.8', value:3},
                {name:'F4',   value:4}, 
                {name:'F5.6', value:5}, 
                {name:'F8',   value:6}, 
                {name:'F11',  value:7}, 
                {name:'F16',  value:8}
            ],
            TV:[
                {name:'16秒',      value:-4},
                {name:'8秒',       value:-3},
                {name:'4秒',       value:-2},
                {name:'2秒',       value:-1},
                {name:'1秒',       value:0},
                {name:'1/2秒',     value:1},
                {name:'1/4秒',     value:2},
                {name:'1/8秒',     value:3},
                {name:'1/15秒',    value:4},
                {name:'1/30秒',    value:5},
                {name:'1/60秒',    value:6},
                {name:'1/125秒',   value:7},
                {name:'1/250秒',   value:8},
                {name:'1/500秒',   value:9},
                {name:'1/1,000秒', value:10},
                {name:'1/2,000秒', value:11},
                {name:'1/4,000秒', value:12},
                {name:'1/8,000秒', value:13}
            ],
            ISO:[
                {name:'ISO 25',         value:-2},
                {name:'ISO 50',         value:-1},
                {name:'ISO 100',        value: 0},
                {name:'ISO 200',        value: 1},
                {name:'ISO 400',        value: 2},
                {name:'ISO 800',        value: 3},
                {name:'ISO 1,600',      value: 4},
                {name:'ISO 3,200',      value: 5},
                {name:'ISO 6,400',      value: 6},
                {name:'ISO 12,800',     value: 7},
                {name:'ISO 25,600',    value: 8},
                {name:'ISO 51,200',    value: 9},
                {name:'ISO 102,400',   value:10},
                {name:'ISO 204,800',   value:11},
                {name:'ISO 409,600',   value:12},
                {name:'ISO 819,200',   value:13},
                {name:'ISO 1,638,400', value:14}
            ],
            isoSelected: '',
            avSelected:  '',
            tvSelected: '',
            avValue:0,
            tvValue:-4,
            isoValue:-2
        },
        methods:{
            getAvValue:function(value){
                this.avValue = value;
            },
            getTvValue:function(value){
                this.tvValue = value;
            },
            getIsoValue:function(value){
                this.isoValue = value;
            },
           
        },
        computed: {
            evValue:function(){
                return this.avValue + this.tvValue - this.isoValue;
            }
        },
    })
})();