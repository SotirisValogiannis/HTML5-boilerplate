<?php
include ('header.php');
?>

<section class="single-product">
  <div class="container single-product__flex">
    <div class="single-product__gallery">
      <img src="img/product-big.png" alt="" class="single-product__thumb">
    </div>
    <form action="#" method="post" class="form single-product__options">
      <h1 class="single-product__title">Design name</h1>
      <div class="single-product__subtitle-price">
        <h2 class="single-product__subtitle">Phone cases</h2>
        <span class="single-product__price">AED 105.00</span>
      </div>
      <div class="single-product__select-title">Select product</div>
      <div class="form__row form__row--flex">
        <select name="brand" id="brand" class="select">
          <option value="apple" selected>Apple</option>
          <option value="samsung">Samsung</option>
        </select>
          <select name="device" id="device" class="select">
            <option value="iphone7" selected>iPhone 7</option>
            <option value="iphone6s">iPhone 6s</option>
            <option value="iphone6">iPhone 6</option>
            <option value="iphone5s">iPhone 5s</option>
            <option value="iphone5">iPhone 5</option>
          </select>
      </div>
      <div class="form__row  form__row--flex">
          <select name="style" id="style" class="select">
            <option value="toughfit" selected>Tough Fit</option>
            <option value="classicsnap">Classic snap</option>
          </select>
          <input type="text" class="numeric-input form__field" value="1" maxlength="2">
          <a href="#"><img src="img/more-info.png" alt="More info" class="single-product__more"></a>
      </div>
      <div class="form__row">
        <input type="submit" value="Add to cart" class="btn btn--full form__submit">
      </div>
      <div class="form__row">
        <input type="button" value="Customize" class="btn btn--full btn--transparent btn--bordered-red form__customize">
      </div>
      <div class="sharer">
        <span class="sharer__text">Share</span>
        <a href="#" class="sharer__social"><img src="img/whatsapp.png" alt="Whatsapp" class="sharer__social-img"></a>
        <a href="#" class="sharer__social"><img src="img/mail-icon.png" alt="Mail this product" class="sharer__social-img"></a>
        <a href="#" class="sharer__social"><img src="img/twitter.png" alt="Share on facebook" class="sharer__social-img"></a>
        <a href="#" class="sharer__social"><img src="img/facebook.png" alt="Share on facebook" class="sharer__social-img"></a>
      </div>
    </form>
  </div>
</section>
<div class="tabs">
  <div class="tabs__titles">
    <div class="tabs__tab-title tabs__tab-title--active">Description</div>
    <div class="tabs__tab-title">Size</div>
    <div class="tabs__tab-title">Reviews</div>
  </div>
  <div class="tabs__content">
    <div class="tabs__tab  tabs__tab--active">
      <div class="tabs__columns">
        <div class="tabs__column">
          <div class="tabs__text">
            <p>This all-over printed mens tee features artwork by <a href="#">Brian Viveros</a>.</p>
            <p>Premium knit mid-weight jersey 100% Polyester</p>
            <p>Here’s what <a href="#">Brian Viveros</a> has to say about his art: Beautiful floral design with abstract background.</p>
          </div>
        </div>
        <div class="tabs__column">
          <img src="img/product-description-banner.png" alt="">
        </div>
      </div>
    </div>
    <div class="tabs__tab">
      <table class="table table--center tabs__table">
        <thead class="table__thead">
          <tr>
            <th>Women's tee</th>
            <th>Chest (in)</th>
            <th>Length (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XS</td>
            <td>32</td>
            <td>23.5</td>
          </tr>
          <tr>
            <td>S</td>
            <td>33</td>
            <td>24</td>
          </tr>
          <tr>
            <td>M</td>
            <td>34.5</td>
            <td>24.5</td>
          </tr>
          <tr>
            <td>L</td>
            <td>36</td>
            <td>25</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>38</td>
            <td>25.5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tabs__tab">
      <div class="tabs__facebook-comments">
        <img src="img/facebook_comments_plugin.png" alt="" style="max-width:100%">
      </div>
    </div>
  </div>
</div>


<?php
include ('footer.php');
?>
