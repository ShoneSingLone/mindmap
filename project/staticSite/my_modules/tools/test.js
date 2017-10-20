        var ststasd = '["*萨达tml*"]';
        var message = ["*萨达tml*"];
        var mark = [];
        mark.length = new Number(ststasd.length);
        console.log(ststasd.length);
        console.log(mark.map(function(i,v,a){
        	return (i+v+a);
        }))
        mark = mark.join("*");
        message.unshift(mark);
        message.push(mark);
        console.log(message);
