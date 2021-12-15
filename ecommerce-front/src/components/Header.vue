<template>
    <nav>
        <ul class="menu">
            <li class="logo">
                <a href="/">INFINITY</a>
            </li>
            <li class="item">
                <router-link to="/"> Home</router-link>
            </li>
            <li class="item">
                <router-link to="/products">Products</router-link>
            </li>
            <li class="item">
                <router-link to="/about-us">About us</router-link>
            </li>
            <li class="item">
                <router-link to="/contact-us">Contact us</router-link>
            </li>
        </ul>
       <router-link to='/sign-in'><button class="btn">Sign in</button></router-link>
    </nav>
</template>
<script>
export default {
    name:"Header",
}
</script>
<style lang="scss">
    nav {
        background-color: black;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        margin:0;

        .menu{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
               display: inline-block;
               padding: 0px 10px;
               height: 47px;
               cursor: pointer;
                &.item:hover{
                    border-bottom:3px solid #42b983 ;
                    color:#42b983;
                }
               a{
                   font-weight: bold;
                   text-decoration: none;
                   color: white;
                   line-height: 48px;
                   transition: color 0.5s;
                   
               }
               a.router-link-exact-active {
                    color: #42b983;
                }
            }
        }

        .btn{
             background-color: white;
            line-height: 35px;
            font-weight: 700;
            cursor: pointer;
            border-radius: 5px;
            width: 100px;
        }

        .logo{
            font-size: 1.5em; 
            padding: 0 30px !important;       
        }
    }
</style>
