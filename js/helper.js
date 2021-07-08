
//free space in memory
var memory = [20,100,25,50,75,60,10,15];

//process size
var process_size = [18,17,15,22,30];

var last = 0;

//first fit algo
function firstFit(var proc)
{
   for(var i=0; i < memory.length() ; i++)
   {
         if(proc<memory[i])
         {
           memory[i]=memory[i]-proc;
           last=i;
           break;
         }
   }


}

//next-fit
function nextFit(var proc)
{


   for(var i = last; i<memory.length() ; i++)
   {
     if(proc<memory[i])
     {
       memory[i]=memory[i]-proc;
       last=i;
       break;
     }
   }



}

//best-fit
function bestFit(var proc)
{
     var index = 0;
     //something very large
     var diff = 999;

    for(var i=0 ; i<memory.length() ; i++)
    {
        if(memory[i]>proc)
        {
             if(diff>memory[i]-proc)
             {
               diff=memory[i]-proc;
               index=i;

             }

        }

    }

   memory[index]=memory[index]-proc;


}

//best-fit
function worstFit(var proc)
{
     var index = 0;
     //something very small
     var diff = 0;

    for(var i=0 ; i<memory.length() ; i++)
    {
        if(memory[i]>proc)
        {
             if(diff<memory[i]-proc)
             {
               diff=memory[i]-proc;
               index=i;

             }

        }

    }

   memory[index]=memory[index]-proc;


}
