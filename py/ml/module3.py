import pandas
filename = 'dataset/forestfires.csv'
names = ['X','Y','month','day','FFMC','DMC',
            'DC','ISI','temp','RH','wind','rain','area']
df = pandas.read_csv(filename,names=names)
print(pandas.isnull(df))
print('*'*30+' Data Shape '+'*'*30)
print(df.shape)
print('*'*30+' Data Types '+'*'*30)
print('*'*30+' Inspecting the head of the data'+'*'*30)
print(df.head(2))
print('*'*30+' Data Stats'+'*'*30)
df.month.replace(('jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'),(1,2,3,4,5,6,7,8,9,10,11,12),inplace=True)
df.day.replace(('mon','tue','wed','thu','fri','sat','sun'),(1,2,3,4,5,6,7),inplace=True)
print(df.dtypes)

print(df.describe())
print(df.corr(method='pearson'))