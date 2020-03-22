## Jest Testing --- clean

Normally I bootstrap from create-react-app but I was experiencing issues with create-react-app and the enzyme testing when it came to trying to find render components when using the --coverage flag.

I messed around with some testing and determined that this was an issue with the current version of enzyme and demonstrated how to still test components and try to maintain optimal test coverage.

If any of the tests I have in the render-tests directory get moved out of it I start to get tests failing when I run my coverage report. I started experiencing this issue on another project which is what compelled me to get into this level of detail to get a better understanding of testing connected components && enzyme.

### Stack

This was set up in part due to the guides here:
https://www.robinwieruch.de/webpack-babel-setup-tutorial/

It provides a minimal webpack setup initialized from a bare npm repository intead of using create-react-app and getting a better understanding of what the react-scripts are doing under the hood...

