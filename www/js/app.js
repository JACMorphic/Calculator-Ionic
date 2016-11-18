var app = angular.module('app', ['ionic'])

//boolean
var toAddDot = true;
var enableDoMath = true;
var enterDoMath = false;
var equalSignOn = false;

//String
var tempStr = "";
var stringCE = "";
var stringNeg = "";
var stringTop = "";
var equalSign ="";
var stringReplace = "";
var topStr = "";
var previous =""

//Real
total = 0;

app.controller ('action', function ($scope) 
{
    $scope.displayScreenTop = "";
    $scope.displayScreenBottom = "0";

    $scope.C = function ()
    {
        Reset($scope);
    } 

    $scope.CE = function ()
    {
        if(enableDoMath) 
        {
            stringCE = $scope.displayScreenBottom;

            if(stringCE.endsWith(".")) toAddDot = true;

            if(stringCE.length == 0 || stringCE.length == 1) $scope.displayScreenBottom = "0";
            else $scope.displayScreenBottom = stringCE.substring(0, stringCE.length - 1);

            if($scope.displayScreenBottom == "-") $scope.displayScreenBottom = "0";
        }
    }

    $scope.dot = function ()
    {
        if(isString13orLess($scope))
        {
            if(toAddDot)
            {
                equalSign = $scope.displayScreenTop;
                if(equalSign.endsWith("="))
                {
                    Reset($scope);
                }

                if(enterDoMath) EnterDoMath($scope);
                if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "0.";
                else if($scope.displayScreenBottom=="") $scope.displayScreenBottom = "0.";
                else $scope.displayScreenBottom +=".";

                toAddDot = false;
            }
        }        
    }  

    $scope.neg = function ()
    {
        if(enableDoMath) 
        {
            stringNeg = $scope.displayScreenBottom;

            if($scope.displayScreenBottom =="") $scope.displayScreenBottom = "0";
            else if( $scope.displayScreenBottom =="0") $scope.displayScreenBottom = "0"; 
            else if(stringNeg.includes("-")) $scope.displayScreenBottom = stringNeg.replace("-", ""); 
            else $scope.displayScreenBottom = "-"+$scope.displayScreenBottom;
        }
    } 

    $scope._9 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "9";
            else $scope.displayScreenBottom += "9";

            enableDoMath = true;
        }
    } 

    $scope._8 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);        

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "8";
            else $scope.displayScreenBottom += "8";

            enableDoMath = true;
        }
    }  

    $scope._7 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "7";
            else $scope.displayScreenBottom += "7";

            enableDoMath = true;
        }
    }

    $scope._6 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "6";
            else $scope.displayScreenBottom += "6";

            enableDoMath = true;
        }
    }

    $scope._5 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "5";
            else $scope.displayScreenBottom += "5";

            enableDoMath = true;
        }
    }  

    $scope._4 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "4";
            else $scope.displayScreenBottom += "4";

            enableDoMath = true;
        }
    }

    $scope._3 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "3";
            else $scope.displayScreenBottom += "3";

            enableDoMath = true;
        }
    }

    $scope._2 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "2";
            else $scope.displayScreenBottom += "2";

            enableDoMath = true;
        }
    }

    $scope._1 = function ()
    {
        if(isString13orLess($scope))
        {   
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "1";
            else $scope.displayScreenBottom += "1"; 

            enableDoMath = true;
        }
    }

    $scope._0 = function ()
    {
        if(isString13orLess($scope))
        {
            equalSign = $scope.displayScreenTop;
            if(equalSign.endsWith("="))
            {
                Reset($scope);
            }
         
            if(enterDoMath) EnterDoMath($scope);

            if($scope.displayScreenBottom=="0") $scope.displayScreenBottom = "0";
            else $scope.displayScreenBottom += "0";

            enableDoMath = true;
        }
    }

    $scope.divide = function ()
    {
        stringTop = $scope.displayScreenTop;
        if(enableDoMath)
        {
            DoMath($scope,"divide");
            enableDoMath = false;
        }
    }

    $scope.multiply = function ()
    {
        stringTop = $scope.displayScreenTop;
        if(enableDoMath)
        {
            DoMath($scope,"multiply");
            enableDoMath = false;
        }
    }

    $scope.add = function ()
    {
        stringTop = $scope.displayScreenTop;
        if(enableDoMath)
        {
            DoMath($scope,"add");
            enableDoMath = false;
        }
    }

    $scope.sub = function ()
    {
        stringTop = $scope.displayScreenTop;
        if(enableDoMath)
        {
            DoMath($scope,"sub");
            enableDoMath = false;
        }
    }

    $scope.equal = function ()
    {
        stringTop = $scope.displayScreenTop;
        if(enableDoMath)
        {
            DoMath($scope,"equal");
            enableDoMath = true;
        }
    }
});

function Reset($scope)
{
    $scope.displayScreenBottom= "0";
    $scope.displayScreenTop = "";
    toAddDot = true;
    total=0;
    enableDoMath = true;
    enterDoMath = false;
    previous = "";
    topStr = "";
}

function EnterDoMath($scope)
{
    enterDoMath = false;
    $scope.displayScreenBottom = "";
    toAddDot = true;
}

function isString13orLess($scope)
{
    stringTop = $scope.displayScreenBottom;
    if(equalSignOn)
    {
       return true; 
    }
    if(stringTop.length >= 13)
    {
       return false;
    }
    return true;
}

function DoMath($scope,sign)
{
    //Bottom Screen Logic and Calculation
    if(previous == "")
    {
        total += parseFloat($scope.displayScreenBottom);
        topStr = $scope.displayScreenBottom;
        $scope.displayScreenBottom = total.toString();
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    }
    else if(previous == "equal")
    {
        $scope.displayScreenBottom = total.toString();
        equalSignOn = true;
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    }
    else if(previous == "add") 
    {
        total += parseFloat($scope.displayScreenBottom);
        topStr = $scope.displayScreenBottom;
        total = total.toPrecision(15);
        $scope.displayScreenBottom = total.toString();
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    }   
    else if (previous == "sub") 
    {
        total -= parseFloat($scope.displayScreenBottom);
        topStr = $scope.displayScreenBottom;
        total = total.toPrecision(15);
        $scope.displayScreenBottom = total.toString();
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    } 
    else if (previous == "multiply") 
    {
        total *= parseFloat($scope.displayScreenBottom);
        topStr = $scope.displayScreenBottom;
        total = total.toPrecision(15);
        $scope.displayScreenBottom = total.toString();
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    } 
    else if (previous == "divide") 
    {  
        total /= parseFloat($scope.displayScreenBottom);
        topStr = $scope.displayScreenBottom;
        total = total.toPrecision(15);
        $scope.displayScreenBottom = total.toString();
        if(($scope.displayScreenBottom).includes(".") || ($scope.displayScreenBottom).endsWith("0"))
        {
            while (($scope.displayScreenBottom).endsWith("0")) 
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
            if(($scope.displayScreenBottom).endsWith("."))
            {
                $scope.displayScreenBottom =  ($scope.displayScreenBottom).slice(0,-1);
            }
        }
    }

    //TOP SCREEN
    if(sign == "equal")
    {
      $scope.displayScreenTop += topStr + "=";
      stringTop = $scope.displayScreenTop;
      stringTop = stringTop.replace("="+topStr, "");
      $scope.displayScreenTop = stringTop;
      equalSignOn = true;
    }
    else if(sign == "add")
    {
      $scope.displayScreenTop += topStr + "+";
      stringTop = $scope.displayScreenTop;
      stringTop = stringTop.replace("="+topStr, "");
      $scope.displayScreenTop = stringTop;
      equalSignOn = true;
    }
    else if(sign == "divide")
    {
      $scope.displayScreenTop += topStr + "÷";
      stringTop = $scope.displayScreenTop;
      stringTop = stringTop.replace("="+topStr, "");
      $scope.displayScreenTop = stringTop;
      equalSignOn = true;
    }
    else if(sign == "sub")
    {
      $scope.displayScreenTop += topStr + "-";
      stringTop = $scope.displayScreenTop;
      stringTop = stringTop.replace("="+topStr, "");
      $scope.displayScreenTop = stringTop;
      equalSignOn = true;
    }
    else  if(sign == "multiply")
    {
      $scope.displayScreenTop += topStr + "×";
      stringTop = $scope.displayScreenTop;
      stringTop = stringTop.replace("="+topStr, "");
      $scope.displayScreenTop = stringTop;
      equalSignOn = true;
    }
      
    previous = sign; 

    enterDoMath = true;
}