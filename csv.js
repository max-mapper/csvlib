(function() {
  var csv = this.csv = {};
  
  // Export the csv object for CommonJS
  if ( typeof module !== 'undefined' && module.exports ) {

    module.exports = csv;

  }
      
  csv.rows = function( data ) {

    return data.split( '\n' );

  }
  
  csv.header = function( data ) {
    if ( data.length !== "undefined" ) {

      return data[0];
        
    } else if ( typeof(data) === "string" && data.indexOf('\n') !== -1 ) {

      return csv.rows( data )[0];

    } else {
        
      return this
        
    }
  }
  
  csv.data = function( data ) {

    return data.slice(1);

  }
  
  csv.properties = function( data ) {

    return data.split( ',' );

  }
  
  // from http://stackoverflow.com/questions/2210437/flattening-a-complex-json-object-for-mvc-binding
  csv.flattenJSON = function( json ) {
    var nj = {},
      walk = function( j ) {
        var jp;
        for( var prop in j ) {
          jp = j[prop];
          if( jp.length !== "undefined" ) { // is array
            nj[prop] = JSON.stringify( jp );
          } else if( jp.toString() === "[object Object]" ) {
            walk( jp );
          } else {
            nj[prop] = jp;
          }
        }
      };
    walk( json );
    return nj;
  }
  
  csv.buildHeaders = function( json ) {
    var keys = [];
    var flatRow = csv.flattenJSON( json );
    for ( var key in flatRow ) {
      keys.push( key );
    }
    return keys.join( ',' ) + "\n";
  }
  
  csv.buildRow = function( json ) {
    var keys = [];
    var flatRow = csv.flattenJSON( json );
    for ( var key in flatRow ) {
      keys.push( flatRow[key] );
    }
    return keys.join( ',' ) + "\n";
  }

})();