# Aula de pandas

#importando Pandas
import pandas as pd

#Criando um dataframe
lista = {'Pais': ['Brasil','Alemanha','China'],
         'Continente': ['America do Sul','Europa','Asia']}
#print(lista)

paises = pd.DataFrame(lista,columns=['Pais', 'Continente'])


#Lendo arquivos csv
muni = pd.read_csv('..//Data//Municipios.csv',encoding='ISO-8859-1',sep=';')

#print(muni)

uf = pd.read_csv(r'../Data/Estados.csv',encoding='ISO-8859-1',sep=';')

#printf(uf)

uf.rename(columns={'UF': 'Unid Fed'}, inplace=True)

#print(uf.columns)

uf.sort_values(by=['Estado'], inplace=True, ascending=False)
del uf['Sintaxe']
uf.to_excel(r'../Resultados/Aula.xlsx', sheet_name='Aula', index=False)
print(uf)