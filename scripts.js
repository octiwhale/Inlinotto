      $(document).ready(function() {
        $('#html-code').on('input', function() {
          var html = $(this).val();
          var modifiedHtml = '';
          var stylesheet = '';
          var styleCounter = 0;
          
          // Strip inline styles and add random ids
          modifiedHtml = html.replace(/style="[^"]*"/gi, function(match) {
            var randomId = 'style-' + (Math.floor(Math.random() * 1000000) + 1);
            stylesheet += '#' + randomId + '{' + match.replace(/style="/i, '').replace(/"/g, '') + '}\n';
            styleCounter++;
            return 'id="' + randomId + '"';
          });
          
          // Display modified HTML code
          $('#modified-html-code').val(modifiedHtml);
          
          // Display generated stylesheet
          if (styleCounter > 0) {
            $('#generated-stylesheet').val(stylesheet);
          } else {
            $('#generated-stylesheet').val('No styles found in the HTML code.');
          }
        });
      });