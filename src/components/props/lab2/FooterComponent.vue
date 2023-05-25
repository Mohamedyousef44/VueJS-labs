<template>
    <div class="container-fluid px-0">
        <footer>

            <div class="footer-content">

            <h3>Movie Store</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

            <ul class="socials">

                <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>

                <li><a href="#"><i class="fa fa-youtube"></i></a></li>

                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>

            </ul>

            </div>

        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
footer {

  background: #111;

  height: auto;

  width: 100%;

  padding-top: 40px;

  color: #fff;
}

.footer-content {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  text-align: center;
}

.footer-content h3 {
  font-size: 2.1rem;

  font-weight: 500;

  text-transform: capitalize;

  line-height: 3rem;
}

.footer-content p {
  max-width: 500px;

  margin: 10px auto;

  line-height: 28px;

  font-size: 14px;

  color: #cacdd2;
}

.socials {
  list-style: none;

  display: flex;

  align-items: center;

  justify-content: center;

  margin: 1rem 0 3rem 0;
}

.socials li {
  margin: 0 10px;
}

.socials a {
  text-decoration: none;

  color: #fff;

  padding: 5px;
}

.socials a i {
  font-size: 1.1rem;

  width: 20px;

  transition: color 0.4s ease;
}

.socials a:hover i {
  color: aqua;
}

.footer-bottom {
  background: #000;

  width: 100vw;

  padding: 20px;

  padding-bottom: 40px;

  text-align: center;
}

.footer-bottom p {
  float: left;

  font-size: 14px;

  word-spacing: 2px;
}

.footer-bottom p a {
  color: #ccc;

  font-size: 16px;

  text-decoration: none;
}

.footer-bottom span {
  text-transform: uppercase;
}

.footer-menu {
  float: right;
}

.footer-menu ul {
  display: flex;
}

.footer-menu ul li {
  padding-right: 10px;

  display: block;
}

.footer-menu ul li a {
  color: #cfd2d6;

  text-decoration: none;
}

.footer-menu ul li a:hover {
  color: #27bcda;
}

@media (max-width: 500px) {
  .footer-bottom p {
    float: none;
  }

  .footer-menu ul {
    display: flex;

    margin-top: 10px;

    margin-bottom: 20px;

    text-align: center;
  }
}

    
</style>