#Quant Trading Prediction Model
This repository contains a Quantitative Trading Prediction Model designed to assist in making data-driven trading decisions. The model uses Principal Component Analysis (PCA) for dimensionality reduction and a short Artificial Neural Network (ANN) to predict trading actions based on both financial and Environmental, Social, and Governance (ESG) data.

##Project Overview
The model leverages:

Technical Indicators from historical trading data.
Chart Analysis for identifying patterns and trends.
ESG Metrics to incorporate sustainable investment factors, offering a unique, socially-conscious approach to trading.
By integrating ESG scores, we align our financial model with sustainability metrics, adding a valuable dimension to traditional quant trading approaches.

##Features
Data Preprocessing:

PCA reduces high-dimensional data for efficient prediction.
ESG data from MSCI ESG Data API complements trading insights.
Model Structure:

Dual-input ANN model architecture with dense layers, batch normalization, and dropout.
Designed for binary action prediction based on market conditions.
##Evaluation:

Tracks accuracy and AUC during training and testing.
Visualization tools for accuracy/loss trends.
Requirements
Python 3.x
TensorFlow, Scikit-learn, Pandas, Numpy, Matplotlib
Installation

#ESG Integration
ESG factors offer a holistic approach to market analysis, adding insights on corporate sustainability that can influence long-term performance. The integration helps align quant trading models with values-based investing.

#Results
Achieves predictive accuracy with enhanced market insights through ESG data integration. Results, including model performance plots, are saved to the /results folder.

