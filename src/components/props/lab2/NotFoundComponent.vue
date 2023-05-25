<template>
    <div class="container-fluid not-con">

        <p class="not-found"> page not found </p>

        <div class="tipsiz">
            <div class="tipsiz-body">
                <div class="left-arm arm"></div>
                <div class="face">
                <div class="upper-face">
                    <div class="element">4</div>
                    <div class="element">0</div>
                    <div class="element">4</div>
                </div>
                <div class="mouth"></div>
                </div>
                <div class="right-arm arm"></div>
            </div>
        </div>

        <p > maybe you want to go <router-link class="text-decoration-none" to="/" >Home</router-link></p>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Comfortaa|Gamja+Flower');

.not-con{
  font-family: 'Gamja Flower', cursive;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
  padding: 0 !important;
}
.not-con p{
  font-family: 'Comfortaa', cursive;
  font-size:30px;
  text-align:center;
  color: white;
}
.not-found{
  color:white;
  padding:15px;
  padding-left:30px;
  padding-right:30px;
}
.tipsiz{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px;
  flex-direction:column;
}
.tipsiz-body{
  display:flex;
  align-items:center;
  margin:10px;
}
.arm{
  align-self:flex-end;
  width: 50px;
	height: 90px;
  border-top:3px solid white;;
  
}
.left-arm{
  border-right:3px solid white;
  transform: skew(20deg);
}
.right-arm{
  border-left:3px solid white;
  transform: skew(-20deg);
}

.face{
  width:300px;
  height:200px;
  border:3px solid white;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  margin-left:20px;
  margin-right:20px;
  border-radius:15px;
}
.upper-face{
  display:flex;
  align-items:center;
  justify-content:center;
  letter-spacing:80px;
  margin-left:80px;
}
.element{
  font-size:60px;
  color: white;
}
.mouth{
  width:20px;
  height:10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 3px solid white;
  border-bottom: 0;
}
  
</style>