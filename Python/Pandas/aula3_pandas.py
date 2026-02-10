#Usando o merge para substituir o procv

#Importando as bibliotecas
import pandas as pd

#Lendo arquivos excel
#Lendo arquivo regiao
regiao = pd.read_excel(r'../data/procv.xlsx','Regiao')
#print(regiao)

#Lendo arquivo população

pop = pd.read_excel(r'../data/procv.xlsx','Populacao')
#print(pop)

#Left Join 

left = pd.merge(regiao, pop, left_on=['Cidade', 'Estado'], right_on=['Cidade', 'Estado'], how='left')
#print(left)

#Right join

right = pd.merge(regiao, pop, left_on=['Cidade', 'Estado'], right_on=['Cidade', 'Estado'], how='right')
#print(right)

#Inner join

inner =  pd.merge(regiao, pop, left_on=['Cidade', 'Estado'], right_on=['Cidade', 'Estado'], how='inner')
#print(inner)

#Outer Join

outer = pd.merge(regiao, pop, left_on=['Cidade', 'Estado'], right_on=['Cidade', 'Estado'], how='outer')
print(outer)