#Lendo varios arquivos
#Impotando as bibliotecas

import pandas as pd
from glob import glob

#Lendo arquivos

arquivos = sorted(glob(r'../Data/Estados/*.xlsx'))
print(arquivos)

#Lendo arquivos para um dataframe

todos_estados = pd.concat((pd.read_excel(cont) for cont in arquivos), ignore_index=True)
#print(todos_estados)

#todos_estados.to_excel(r'../Resultados/Aula2.xlsx', index=False)

#Criando um dataframe com um comando so 
todos_estados = pd.concat((pd.read_excel(cont)for cont in sorted(glob(r'../Data/Estados/*.xlsx'))),ignore_index=True)

print(todos_estados)

#Exportando arquivos de uma so vez para o excel

pd.concat((pd.read_excel(cont) for cont in sorted(glob(r'../Data/Estados/*.xlsx'))), ignore_index=True).to_excel(r'../Resultados/Aula2a.xlsx', index=False)



