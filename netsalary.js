// function to calculate netpay
function netPay (basicpay){

  //Calculate Gross Salary
  var grossPay;
  grossPay = basicPay + totalAllowances;
  
//paye
function payeCalculation (basicpay){
    if (basicpay <= 24000){
    return (basicpay * 0.1);

    } else if (basicpay >=24001 && basicpay <= 32333){
    return(basicpay * 0.25);

    }else if(basicpay >= 32334 && basicpay <= 500000){
    return(basicpay * 0.3);

     }else if(basicpay >= 500001 && basicpay <= 800000 ){
     return(basicpay * 0.325);

}else if (basicpay > 800000)
    return(basicpay * 0.35);
}
payeCalculation(basicpay);


    //NHIF
    function nhifCalculation (basicpay){
        if (basicpay <= 5999){
        return(basicpay - 150);

    }else if (basicpay >= 6000 && basicpay <= 7999){
        return(basicpay - 300);

     }else if (basicpay <= 8000 && basicpay <= 11999){
        return(basicpay - 400);

     }else if (basicpay >= 12000 && basicpay <= 14999){
        return(basicpay - 500);

      }else if (basicpay >= 15000 && basicpay <= 19999){
        return(basicpay - 600);

      }else if (basicpay >= 20000 && basicpay <= 24999){
        return(basicpay - 750);

       }else if (basicpay >= 25000 && basicpay <= 29999){
        return(basicpay - 850);

       }else if (basicpay >= 30000 && basicpay <= 34999){
        return(basicpay - 900);

       }else if (basicpay >= 35000 && basicpay <= 39999){
        return(basicpay - 950);

       }else if (basicpay >= 40000 && basicpay <= 44999){
        return(basicpay - 1000);

        }else if (basicpay >= 45000 && basicpay <= 49999){
        return(basicpay - 1100);

        }else if (basicpay >= 50000 && basicpay <= 59999){
        return(basicpay - 1200);

         }else if (basicpay >= 60000 && basicpay <= 69999){
        return(basicpay - 1300);

          }else if (basicpay >= 70000 && basicpay <= 79999){
        return(basicpay - 1400);

           }else if (basicpay >= 80000 && basicpay <= 89999){
        return(basicpay - 1500);

            }else if (basicpay >= 90000 && basicpay <= 99999){
        return(basicpay - 1600);

             }else if (basicpay > 100000)
        return(basicpay - 1700);
        }
        nhifCalculation (basicpay);

        // NSSF
        function nssfCalculation (basicpay){
            return (basicpay * 0.06);
        }
nssfCalculation (basicpay)

  //Housing Levy Calculator based on gross salary
  var housingLevy;
  housingLevy = 0.015 * grossSalary;

}

  // calling the netPay Function 
   console.log (netPay = (grossPay -(nssfCalculation + nhifCalculation + payeCalculation + housingLevy)) );
netPay();
