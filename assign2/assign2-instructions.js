var transactions = [
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'CJ Cherryh',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XS Doodad', price: -0.50 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Basic Gadget', price: -2.00 },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Frederik Pohl',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Clarke Computing',
      items: [
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Neal Stephenson',
      items: [
        { name: 'kilobyte', price: 1024.00 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
      ]
    }
  ];
  
  
  // --------------------------------------------------
  // EXAMPLE QUESTION
  // --------------------------------------------------
  /*
    Calculate the total number of transactions.
  */
  var totalTransactions = transactions.length;
  
  console.log( '0.  The total number of transactions is:', totalTransactions );
  
  
  // --------------------------------------------------
  // QUESTION 01
  // --------------------------------------------------
  /*
    Calculate the total number of 'sales'.
  
    HINT(S):
    - Not all transactions are 'sales'.
  */
  var numSales = 0;
  
  // iterate through transactions
  // if the type is 'sale', add 1 to numSales

  transactions.forEach(function(transaction) {
    if(transaction.type === 'sale') {
      numSales++;
    }
  });

  console.log('1.  The total number of sales is: ', numSales);
  
  /*
    Hey, welcome to the first question!
  
    Here's a breakdown of the question, and some pointers on how to get started!
      - A variable has been declared a few lines above (`numSales`).
      - Just below, the contents of the `numSales` variable are logged to the console.
      - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
      - You can do this by:
        - Adding an `=` sign (we are *assigning* something after all)
        - Starting with the `transactions` variable (see the example question);
        - Adding one or more methods to transform/extract the value we're looking for.
        - If your solution is correct, `numSales` should be equal to 5.
  
    You can solve the emaining questions in the same way!
  
    P.S.
    The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
  */

  
  
  // --------------------------------------------------
  // QUESTION 02
  // --------------------------------------------------
  /*
    Calculate the total number of 'purchases'.
  */
  var numPurchases = 0;

  transactions.forEach(function(transaction) {
    if(transaction.type === 'purchase') {
      numPurchases++;
    }
  });

  console.log('2.  The total number of purchases is: ', numPurchases);
  
  
  // --------------------------------------------------
  // QUESTION 03
  // --------------------------------------------------
  /*
    Calculate the total number of 'cash' 'sales'.
  
    HINT(S):
    - Don't forget that 'purchases' can also be made in 'cash'!
  */
  var numCashSales = 0;

  transactions.forEach(function(transaction) {
    if(transaction.type === 'sale') {
      if(transaction.paymentMethod === 'cash') {
        numCashSales++;
      }      
    }
  });

  console.log('3.  The total number of cash sales is: ', numCashSales);
  
  // --------------------------------------------------
  // QUESTION 04
  // --------------------------------------------------
  /*
    Calculate the total number of 'credit' 'purchases'.
  
    HINT(S):
    - Make sure to exclude any 'sales' made by 'credit'!
  */
  
  var numCreditPurchases = 0;
  
  transactions.forEach(function(transaction) {
    if(transaction.type === 'purchase') {
      if (transaction.paymentMethod === 'credit') {
        numCreditPurchases++;
      }      
    }
  });

  console.log('4.  The total number of credit purchases is: ', numCreditPurchases);
  
  // --------------------------------------------------
  // QUESTION 05
  // --------------------------------------------------
  /*
    Create an array that includes all of vendors which appear in the transactions data set.
    eg. `[ 'vendor one', 'vendor two', ... ]
  
    HINT(S):
    - Not all transactions have a 'vendor'!
    - The assembled array should be made up of strings, not full `transaction` objects.
    - This array is allowed to contain duplicate values.
  */
  var uniqueVendors = [];

  transactions.forEach(function(transaction) {
    if ('vendor' in transaction) {
      uniqueVendors.push(transaction.vendor)
    }
  });

  console.log ('5.  The list of vendors is : ', uniqueVendors)

  

  
  // --------------------------------------------------
  // QUESTION 06
  // --------------------------------------------------
  /*
    Create an array that includes all of *unique* customers which appear in the transactions data set.
    eg. `[ 'customer one', 'customer two', ... ]
  
    HINT(S):
    - Not all transactions have a 'customer'!
    - The assembled array should be made up of strings, not full `transaction` objects.
    - Make sure that the resulting array *does not* include any duplicates.
  */
  
  var uniqueCustomers = [];

  transactions.forEach(function(transaction) {
    if ('customer' in transaction) {
      if (!(uniqueCustomers.includes(transaction.customer))) {
        uniqueCustomers.push(transaction.customer)
      }
    }
  });

  console.log ('6.  The list of customers is : ', uniqueCustomers);

  
  
  // --------------------------------------------------
  // QUESTION 07
  // --------------------------------------------------
  /*
    Create an array of information about the 'sale' transactions which include 5 or more items.
  
    The array should resemble the following:
    [ { name: 'Customer Name', numItems: 5 }, ... ]
  
    HINT(S):
    - There may be more than 1 'sale' that includes 5 or more items.
    - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
  */
  var bigSpenders = [];
  i = 0;

  transactions.forEach(function(transaction) {
    if (transaction.type === 'sale') {
      if (transaction.items.length >= 5) {
        a = {name: transaction.customer, numItems: transaction.items.length};
        bigSpenders.push(a);
      }
    }
  });

  console.log('7.  The transactions which include 5 or more items are: ', bigSpenders);

  

  
  
  // --------------------------------------------------
  // QUESTION 08
  // --------------------------------------------------
  /*
    Calculate the sum of the *first* 'sale' transaction.
  
    HINT(S):
    - Transactions don't have 'prices', but their 'items' do!
  */
  var sumSales = 0;
  var a = 0;
  
  transactions.forEach(function(transaction) {
    if (a === 0) {
      if(transaction.type === 'sale') {
        a = transaction
      }
    }
  });
  
  a.items.forEach(function(item) {
    sumSales += item.price   
  });

  console.log('8.  The sum of the first sale is:  $', sumSales);
  
  
  // --------------------------------------------------
  // QUESTION 09
  // --------------------------------------------------
  /*
    Calculate the sum of *all* 'purchase' transactions.
  
    HINT(S):
    - Your solution to 'QUESTION 08' is a good starting point!
    - Make sure to include 'price' information from *all* purchases.
  */
  
  var sumPurchases = 0;

  transactions.forEach(function(transaction) {
    if(transaction.type === 'purchase') {
      transaction.items.forEach(function(item) {
        sumPurchases -= item.price
      });
    }
  });

  console.log('9.  The sum of all items purchased is:  $', sumPurchases);
  // console.log('The sum of all items purchased is:  $', sumPurchases.toFixed(2));
  // console.log('The sum of all items purchased is:  $', Math.round(sumPurchases * 1e2)/1e2);
  
  
  // --------------------------------------------------
  // QUESTION 10
  // --------------------------------------------------
  /*
    Calculate the company's net profit.
  
    This number will be positive if the sum of the sales is greater than the amount spent on purchases.
  
    Otherwise, this number will be negative.
  
    HINT(S):
    - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
  */
  var netProfit = 0;

  transactions.forEach(function(transaction) {
    transaction.items.forEach(function(item) {
      netProfit += item.price      
    });
  });

  console.log('10.  The net profit is:  $', netProfit);

  
  

  // --------------------------------------------------
  // QUESTION 11
  // --------------------------------------------------
  /*
    Calculate the most items sold as part of single transaction.
  
    HINTS:
    - The result of this calculation should be a number (not an array, object, or other data type).
  */
  var mostItems = 0;
  
  transactions.forEach(function(transaction) {
    if (transaction.type === 'sale') {
      if (transaction.items.length > mostItems) {
        mostItems = transaction.items.length
      }
    }
  });

  console.log('11.  The largest number of items sold in a single sale is ', mostItems);


  // --------------------------------------------------
  // QUESTION 12
  // --------------------------------------------------
  /*
    Calculate the sum of the 'purchase' with the fewest items.
  */
  var sumOfSmallestPurchase = 0;
  var numItems = 0;

  transactions.forEach(function(transaction) {
    if (transaction.type === 'purchase') {
      if (numItems === 0 || transaction.items.length < numItems) {
        numItems = transaction.items.length
        sumOfSmallestPurchase = 0;
        transaction.items.forEach(function(item) {
          sumOfSmallestPurchase += item.price
        });
      }
    }
  });

  console.log('12.  The sum of the purchase with the smallest number of items is:  $', sumOfSmallestPurchase);