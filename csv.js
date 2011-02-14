var createRefinementUI = function( csv ) {
  var _rows = csv.split('\n'),
      _header = _rows[0].split(','),
      _data = _rows.slice( 1 ),
      propsSelect = $('[name=set]').clone().get(0),
      ocdPropertiesUL = '<ul class="ocdproperties"><li></li><li>start</li><li>end</li><li>geometry</li></ul>',
      userPropertiesUL = $('<ul>', {
        className: 'userProperties',
      });

  _.each( _header , function( iterator, property ){
    userPropertiesUL.append('<li>' + iterator + '</li>')
  });
