### Metis Project 3: School Closure Classification

Can we identify schools at risk for closure by performance and other characteristics?

Full discussion in my blog post [here](http://www.huguedata.com/2016/05/21/predicting-school-closure/).

### Code Dependencies
* Numpy
* Pandas
* Matplotlib
* Seaborn
* Collections
* Sklearn


### Data
None of the source or cleaned datafiles are included in this repository. However, the raw National Center for Education Statistics school-level Common Core of Data Files can be downloaded [here](https://nces.ed.gov/ccd/pubschuniv.asp), and the raw EdFacts School performance data can be downloaded [here](http://www2.ed.gov/about/inits/ed/edfacts/data-files/index.html). These data can be cleaned by running the *school-closure-clean.ipynb* notebook (see below).


### IPython Notebooks and Program Flow:
1. *school-closure-clean.ipynb*: Import raw NCES CCD and EdFacts data, clean, and engineer features.
2. *school-closure-classify.ipynb*: Apply various supervised machine learning algorithms from sklearn to predict school closure given performance and demographic characteristics. Evaluate performance of various algorithms in terms of precision-recall tradeoff.
3. *school-closure-viz.ipynb*: Produce descriptive statistics from cleaned NCES data and compile county-level datafile for d3 maps.


###Other Fun Stuff:
1. *graphics/*: JPG/ PNG of Matplotlib and Seaborn graphics produced for my final presentation and blog post.
2. *graphics/d3-map/*: Static and Interactive school closure maps showing closure rates across different U.S. counties.
3. *deck/*: Final powerpoint deck associated with the presentation I gave at Metis on 5/13/2016


