import pandas as pd

muni = pd.read_csv(r'../data/Municipios.csv', encoding='ISO-8859-1', sep=';',
                   usecols=['UF', 'Município', 'Região', 'População 2010', 'Porte', 'Capital'])
#print(muni)

muni = muni.rename(columns={'População 2010': 'Pop_2010'})
#print(muni)

UF = muni.groupby('UF')['Pop_2010'].mean().reset_index()

print(UF)

for i in UF.index:
    muni[muni['UF'] == UF['UF'][i]].to_xml(
        '..//Data//XML//' + UF['UF'][i] + '.xml',
        parser='etree',
        encoding='ISO-8859-1',
        index=False
    )

print(muni)
