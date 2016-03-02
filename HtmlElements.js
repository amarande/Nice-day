d3Select=d3.select('body');

d3Select.append('article').attr('class','product_reviews').append('p').html('<h2>Kindle tablet</h2>');
d3Select.append('section').attr('class','user_reviews').append('p').style('color','purple').html('<h3>User Reviews</h3>');
d3Select.append('article').attr('class','user_review').append('p').html('Good value at $79');
d3Select.append('p').style('font-size','x-small').html('Posted on ').append('time').attr('datetime','March-01-2016').html('March 1,2016 by Lisa');

d3Select.append('article').attr('class','user_review').append('p').html('know what you are buying');
d3Select.append('p').style('font-size','x-small').html('Posted on ').append('time').attr('datetime','March-01-2016').html('March 1,2016 by Andew');

d3Select.append('address').append('p').style('font-size','small')
.html('If you have any question,please contact ').append('a').attr('href','mailto:webmaster@eac.com').html('webmaster');

src = 'http://web.7.c3.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3';
d3Select.append('audio')
   .attr({
       control: true,
       src : src
    });
