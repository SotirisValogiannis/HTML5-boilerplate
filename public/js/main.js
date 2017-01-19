// filters
(function($){

  var $section  = $('.filters__section'),
      $list     = $('.filters__list'),
      $title    = $('.filters__title'),
      $item     = $('.filters__item'),
      $selectedLink = $('.filters__link:not(.filters__link--more):not(.filters__link--checkbox)'),
      $checkedLink = $('.filters__link.filters__link--checkbox:not(.filters__link--more)'),
      $moreLink = $('.filters__link--more'),
      blockName = 'filters__',
      closedSectionClass = 'filters__title--closed',
      selectedClass  = 'filters__link--selected',
      checkedClass   = 'filters__link--checked',
      moreHiddenItemClass = 'filters__item--extra'
      checkCapability = 'filters__link--checkbox',
      moreText = '+ More',
      lessText = '- Less';

  $title.on('click', function(){
    $(this).toggleClass(closedSectionClass);
    $(this).siblings($list).slideToggle();
  });

  $selectedLink.on('click', function(e){

    e.preventDefault();

    $(this).parent($item).siblings().each(function(){
      $(this).find($selectedLink).removeClass(selectedClass);
    });
    $(this).addClass(selectedClass);
  });

  $checkedLink.on('click', function(e){

    e.preventDefault();

    $(this).toggleClass( selectedClass );
    $(this).toggleClass( checkedClass );
  });

  $moreLink.on('click', function(e) {
    e.preventDefault();

    $(this).parent($item).siblings('.'+moreHiddenItemClass).each(function(){
      $(this).toggle();
    });


    $(this).text(  $(this).text() === moreText ? lessText : moreText  )

  })

})(jQuery);


// dropdown
(function($){
  var $select = $('.select'),
      formFieldClass = 'form__field'
      selectWrapperClass = 'custom-select',
      selectListClass = 'custom-select__list',
      selectOptionClass = 'custom-select__item',
      selectedClass = 'custom-select__selected',
      selectWrapperTemplate = '<div class="'+selectWrapperClass+'"></div>',
      selectTemplate = '<ul class="'+selectListClass+'"></ul>',
      selectOptionTemplate = '<li class="'+selectOptionClass+' '+formFieldClass+'"></li>';

  $select.each(function(){

    var that = this;

    function sortElements($ul) {

      var items = $ul.find('li:not(.'+selectedClass+')');

      return items.sort(function SortByName(a, b){
        var aIndex = $(a).attr('index');
        var bIndex = $(b).attr('index');
        return ((aIndex < bIndex) ? -1 : ((aIndex > bIndex) ? 1 : 0));
      });
    }

    $(this).wrap(selectWrapperTemplate);
    $(this).before(selectTemplate);

    $(this).find('option').each(function(index){
      var value = $(this).val(),
          text = $(this).text(),
          classes = $(this).is(':selected') ? selectedClass : '',
          $optionTemplate = $(selectOptionTemplate).attr('value',value).attr('index',index).text( text ).addClass(classes);

      $(that).siblings('.'+selectListClass).append($optionTemplate);


    });

    $('.'+selectListClass).on('click', '.'+selectOptionClass, function(e){

      e.stopImmediatePropagation();

      var value = $(this).attr('value');

      if( $(this).hasClass(selectedClass) ) {

        if( $(this).hasClass('clicked')) {
          $('.'+selectOptionClass).siblings().removeClass('visible');
          $(this).removeClass('clicked');
          $(this).closest('.'+selectWrapperClass).removeClass('opened');
        } else {
          $(this).siblings().addClass('visible');
          $(this).closest('.'+selectWrapperClass).addClass('opened');
          $(this).prependTo($(this).closest( '.'+selectListClass ) );
          $(this).addClass('clicked');
        }

      } else {
        $(this).closest('.'+selectWrapperClass).find($select).find('option[value='+value+']').prop('selected',true);
        $(this).addClass(selectedClass).siblings().removeClass(selectedClass);
        $('.'+selectOptionClass).removeClass('visible clicked');
        $(this).closest('.'+selectWrapperClass).removeClass('opened');

        var sorted = sortElements($(this).closest('.'+selectListClass));
        $(this).siblings().remove();
        $(this).closest('.'+selectListClass).append( sorted );
      }
    });

  });

})(jQuery);

// numeric input
(function($){
  var $input = $('.numeric-input'),
      numericWrapperClass = 'numeric-wrapper',
      plusClass = 'numeric-plus',
      minusClass = 'numeric-minus',
      buttonsTemplate = '<input type="button" class="'+plusClass+' numeric-btn"><input type="button" class="'+minusClass+'  numeric-btn">',
      numericWrapper = '<div class="'+numericWrapperClass+'"></div>'
      ;

      // generate custom template
      $input.each(function(){

        $(this).wrap(numericWrapper);
        $(this).after(buttonsTemplate);

      });

  // accept only numbers and remove chars
  $input.on('keypress', function(event){
    console.log(event.charCode)
    return (event.charCode >= 48 && event.charCode <= 57) || event.charCode === 8 || event.charCode === 46 || event.charCode === 0
  });

  // set default value to 1 if empty
  $input.on('blur', function(){
    if( ! parseInt( $(this).val() ) ) {
      $(this).val('1')
    }
  })

  // depending on the clicked change value button add or remove one item
  $('.numeric-btn').on('click', function(){
      var $input = $(this).siblings('.numeric-input'),
          currentValue = parseInt( $input.val() ) ? parseInt( $input.val() ) : 0 ,
          addOne = $(this).hasClass(plusClass),
          newValue = addOne ? currentValue + 1 : (currentValue > 1 ? currentValue - 1 : 1  );

          $input.val( newValue )
  })

})(jQuery);

(function($){

  var $tabsTitles = $('.tabs__tab-title'),
      $tabContent = $('.tabs__tab'),
      tabContentActiveClass = 'tabs__tab--active',
      tabTitleActiveClass = 'tabs__tab-title--active';

  $tabsTitles.on('click', function(){
    var tabIndex = $tabsTitles.index( this ),
        $tabsContainer = $(this).closest('.tabs');

      $tabsTitles.removeClass(tabTitleActiveClass).eq( tabIndex ).addClass( tabTitleActiveClass );
      $tabsContainer.find($tabContent).removeClass(tabContentActiveClass).eq( tabIndex ).addClass(tabContentActiveClass);


  })

})(jQuery);

// toggles
(function($){
  $('.header__nav-icon').on('click', function(){
    $('.header__nav').slideToggle()
  });

  $('.touch .header__action .header__icon-btn').on('touchstart', function(){

    if( $(this).hasClass('clicked') ) {
        $(this).siblings('.dropdown').toggle();
        $(this).removeClass('clicked')
    } else {
        $('.touch .header__action .header__icon-btn').removeClass('clicked')
        $('.touch .header__action .header__icon-btn + .dropdown').hide();
        $(this).siblings('.dropdown').toggle();
        $(this).addClass('clicked')
    }
  })

  $('.header__search-icon').on('click', function(){
    $('.search').slideToggle()
  })
})(jQuery);
