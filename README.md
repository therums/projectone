# projectone
try again
npm start

condition ? true : false

Links to those who agree with me about ternary being beautiful code

Ideas of using ternary to show a point:

serverDrink(userIsYoungerThan18) ? serverJuice : serveWine;

Know how to greet someone:
var now = time()
var greeting = 'Good ' + ((now.time > 16) ? ' evening' : ' morning')

Hi Honey

some examples for your ternary operator blog.

Love
John

1 Nesting ternary operators.

function check( test1, test2 ) {
 return test1 ? test2 ? "Pass 1, Pass 2."
                      : "Pass 1, Fail 2."
              : test2 ? "Fail 1, Pass 2."
                      : "Fail 1, Fail 2."
}

which could be rewritten as

function check( test1, test2 ) {
 return ( test1 ?"Pass 1, " : "Fail 1, " )
      + ( test2 ? "Pass 2."  : "Fail 2."  )
}

2 Simplifying some conditional code.

Sometimes you see code like

   if ( condition ) {
       result = true
   } else {
       result = false
   }

It works, but is unnecessarily wordy.  We can simplify it with a ternary
operator.

   condition ? result = true : result = false

which also works, but is still unnecessarily wordy.  A further
simplification gives us

   result = condition ? true : false

which works, but can be further simplified to

   result = condition

If you REALLY HAVE TO HAVE result taking only boolean values (true or
false, rather than something which evaluates to true or false in a
boolean context (0 => false, 1 => true)),
you can use

   result = Boolean( condition )

to get that, but it is very rarely needed.  Rather than

   if ( result === true )

it is simpler and safer to use

   if ( result )