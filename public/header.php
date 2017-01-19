<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Boilerplate title</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/style.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- <img src="img/PDP-Cases.png" style="position:absolute;top:4px;left:50%;transform:translate(-50%,0);opacity:0.5;"> -->

        <header class="header container">
          <a href="#">
            <picture>
              <source srcset="img/logo-mobile.png" media="(max-width: 500px)">
              <img src="img/logo.png" alt="Its Ink">
            </picture>
          </a>
          <nav class="nav header__nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="#" class="nav__link">Sell</a></li>
              <li class="nav__item">
                <a href="#" class="nav__link">Cases</a>
                <ul class="dropdown dropdown--large">
                  <li class="dropdown__category"><span>Cases</span></li>
                  <li class="dropdown__columns">
                    <ul class="dropdown__column">
                      <li class="dropdown__item dropdown__subcategory"><a href="#" class="dropdown__subcategory-link">Apple</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">iPhone 7</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">iPhone 6s</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">iPhone 6</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">iPhone 5s</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">& more</a></li>
                    </ul>
                    <ul class="dropdown__column">
                      <li class="dropdown__item dropdown__subcategory"><a href="#" class="dropdown__subcategory-link">Samsung</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Galaxy 6</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Galaxy 5</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Note 5</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Note 4</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">& more</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">Clothing</a>
                <ul class="dropdown dropdown--large">
                  <li class="dropdown__category">Clothing</li>
                  <li class="dropdown__columns">
                    <ul class="dropdown__column">
                      <li class="dropdown__item dropdown__subcategory"><a href="#" class="dropdown__subcategory-link">Women</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">T-shirts</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Tank tops</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Crop tops</a></li>
                    </ul>
                    <ul class="dropdown__column">
                      <li class="dropdown__item dropdown__subcategory"><a href="#" class="dropdown__subcategory-link">Men</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">T-shirts</a></li>
                      <li class="dropdown__item"><a href="#" class="dropdown__link">Tank tops</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav__item nav__item--mobile-visible"><a href="#" class="nav__link nav__link--purple">Create account</a></li>
            </ul>
          </nav>
          <a href="#" class="btn header__btn">Create</a>
          <div class="header__actions">
            <button class="header__action header__search-icon header__icon-btn"><img src="img/search.png" alt="Search"></button>
            <div class="header__action header__buy">
              <button class="header__icon-btn"><img src="img/buy.png" width="24" alt="Buy"></button>
              <ul class="dropdown dropdown--tip-right dropdown--products">
                <li class="dropdown__columns">
                  <form class="dropdown__form" action="#" method="post">
                    <div class="dropdown__product">
                      <a href="#" class="dropdown__product-thumb"><img src="img/dropdown-product.png" alt=""></a>
                      <div class="dropdown__product-texts">
                        <div class="dropdown__product-name">Design name</div>
                        <div class="dropdown__product-manufacture">by <a href="#">Vivek Thakkar</a></div>
                        <div class="dropdown__product-price">AED 100</div>
                        <input type="text" class="numeric-input form__field" value="1" maxlength="2">
                      </div>
                    </div>
                    <div class="dropdown__product">
                      <a href="#" class="dropdown__product-thumb"><img src="img/dropdown-product.png" alt=""></a>
                      <div class="dropdown__product-texts">
                        <div class="dropdown__product-name">Design name</div>
                        <div class="dropdown__product-manufacture">by <a href="#">Vivek Thakkar</a></div>
                        <div class="dropdown__product-price">AED 100</div>
                        <input type="text" class="numeric-input form__field" value="1" maxlength="2">
                      </div>
                    </div>
                    <input type="submit" class="btn btn--full" value="Checkout" class="dropdown__checkout">
                  </form>
                </li>
              </ul>
            </div>
            <div class=" header__action header__profile">
              <button class="header__icon-btn"><img src="img/profile.png" alt="Profile"></button>
              <ul class="dropdown dropdown--tip-right">
                <li class="dropdown__columns">
                  <ul class="dropdown__column">
                    <li class="dropdown__item"><a href="#" class="dropdown__link">Shopping cart</a></li>
                    <li class="dropdown__item dropdown__item--bordered"><a href="#" class="dropdown__link">Checkout</a></li>
                    <li class="dropdown__item"><a href="#" class="dropdown__link"><strong>Sign in</strong></a></li>
                    <li class="dropdown__item"><a href="#" class="dropdown__link"><strong>Register</strong></a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
            </div>
            <button class="header__action header__icon-btn header__nav-icon"><img src="img/nav-icon-thin.png" alt="Navigation"></button>
          </div>
          <form action="#" class="search">
            <input type="text" name="search" placeholder="Search" class="search__field">
          </form>
        </header>
