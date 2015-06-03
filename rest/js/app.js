/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var parseID='1WTHasp725LZCcxqYfqiDUTP3kZi0mNtJJmeMnjv';
var parseRestKey='mVAwDecfbS8Nohfmw5jw1T0u8nQ9RYDvph5rJDjv';

$(document).ready(function(){
    getMessage();
    $("#send").click(function(){
        var username=$('input[name=username]').attr('value');
        var message=$('input[name=message]').attr('value');
        console.log(username)
        console.log('!')
        $.ajax({
            url:'https://api.parse.com/1/classes/MessageBoard',
            headers:{
                'X-Parse-Application-id':parseID,
                'X-Parse-REST-API-key':parseRestKey
            },
            contentType:'application/json',
            dataType:'json',
            processData:false,
            data:JSON.stringify({
                'username':username,
                'message':message
            }),
            type:'POST',
            success:function(){
                console.log('sent');
                getMessage();
            },
            error:function(){
                console.log('error');
            }
        });
    });        
    })
    function getMessage(){
        $.ajax({
            url:'https://api.parse.com/1/classes/MessageBoard',
            headers:{
                'X-Parse-Application-Id': parseID,
                'X-Parse-REST-API-Key': parseRestKey               
            },
            contentType:'application/json',
            dataType:'json',
            type:'GET',
            success:function(data){
                console.log('get');
                updateView(data);
            },
            error:function(){
                console.log('error');
            }
        });
    }
    
    function updateView(messages){
        var table=$('.table tbody');
        table.html('');
        $.each(messages.results,function(index,value){
            var trE1=
                    $('<tr><td>'
                      + value.username
                      +'</td><td>'
                      + value.message +
                      '</td></tr>');
              table.append(trE1);
        });
        console.log(messages);
    }