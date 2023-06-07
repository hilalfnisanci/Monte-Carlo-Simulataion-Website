from cmath import sqrt
from tkinter import S
from matplotlib import pyplot
import numpy as np
import pandas as pd
import scipy.stats as stats
import matplotlib.pyplot as plt
import xlsxwriter
import seaborn as sns
import scipy.integrate as spi
from mpl_toolkits.axes_grid1 import make_axes_locatable

def ReadFile(FileName):

    df_wavelengths = pd.read_excel(FileName , sheet_name = data_SheetName , usecols = "A" , engine='openpyxl') 
    df_values = pd.read_excel(FileName , sheet_name = data_SheetName , index_col=0 , engine='openpyxl')

    df_distr = pd.read_excel(FileName , sheet_name = distributions_SheetName , engine = 'openpyxl')

    v_lambda = pd.read_excel(FileName, sheet_name="VLamda",index_col=0, engine = 'openpyxl')

    matrix_v_lambda = np.array(v_lambda)

    d = list(df_wavelengths.columns)
    XAxisName = d[0]

    matrix_waveLengths = np.array(df_wavelengths)
    matrix_values = np.array(df_values)
    matrix_distr = np.array(df_distr)

    return matrix_waveLengths , matrix_values , matrix_distr, XAxisName, matrix_v_lambda

