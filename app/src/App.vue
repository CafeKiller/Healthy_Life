<script>
import { mapMutations} from "vuex";

export default {
    data() {
        return {
            user: {
                name: "11111"
            }
        }
    },
    methods: {
      ...mapMutations(["setUser"])
    },
		onLaunch: function() {
      uni.getStorage({
          key: "user_data",
          success: (res)=>{
            console.log("App Launch => ", res.data)
            this.setUser(res.data)
          }
      })
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
    created() {

    },
	}
</script>

<style>
:root {
    --main-color: #00b09a;
    --sub-color-1: #36d8c1;
    --sub-color-2: #218476;
    --coo-color-1: #114fb8;
    --coo-color-2: #26dc00;
    --reve-color: #ff6a00;
}
.content *,
.content *:after,
.content *:before {
    box-sizing: border-box;
}
body {
    background-color: #ffffff;
}
.content {
    width: 100%;
}
</style>
