import json
import pandas as pd

# Caminho para o arquivo JSON criado pelo PHP

def main():
    json_file_path = "C:/xampp/htdocs/json/dashboard.json"

    # Ler o JSON do arquivo
    try:
        with open(json_file_path, "r") as json_file:
            dashboardJSON = json_file.read()
    
        # Decodificar o JSON para um objeto Python
        try:
            dashboard = json.loads(dashboardJSON)
            df = pd.DataFrame(dashboard)
            df['horario_inicio'] = pd.to_datetime(df['horario_inicio'])
            df['horario_fim'] = pd.to_datetime(df['horario_fim'])
            df['horario_inicio'] = df['horario_inicio'].dt.strftime("%Y-%m-%d %H:%M")
            df['horario_fim'] = df['horario_fim'].dt.strftime("%Y-%m-%d %H:%M")
            df[['data', 'hora']] = df['horario_inicio'].str.split(' ', n=1, expand=True)
            df[['data_fim', 'hora_fim']] = df['horario_fim'].str.split(' ', n=1, expand=True)
            df_sorted = df.sort_values(by='horario_inicio', ascending=False)


            # Selecionar as 3 primeiras linhas (as mais recentes)
            df_recent = df_sorted.head(3).copy()
            
            evento = {
                   "Adicionado Recentemente": [],
                   "Em Progresso": [],
                   "Em revisão": [],
                   "Completo": [],
                   "Status":[]
                }
            
                    
            for index, row in df.iterrows():
                novo_evento = {
                    "imagem": './php/' + row['imagem'],
                    "texto": f"<h3>{row['titulo']}</h3><h6>{row['hora']} - {row['hora_fim']}</h6>",
                    "data": row['data'],
                    'status':row['status']
                }
                evento["Adicionado Recentemente"].append(novo_evento)

            
            for index, row in df.iterrows():
                if row['status'] == 'Em Progresso':
                    novo_evento = {
                        "imagem":'./php/' + row['imagem'],
                        "texto": f"<h3>{row['titulo']}</h3><h6>{row['hora']} - {row['hora_fim']}</h6>",
                        "data": row['data'],
                        'status':row['status']
                    }
                    evento["Em Progresso"].append(novo_evento)

            for index, row in df.iterrows():
                if row['status'] == 'Em revisão':
                    novo_evento = {
                        "imagem":'./php/' + row['imagem'],
                        "texto": f"<h3>{row['titulo']}</h3><h6>{row['hora']} - {row['hora_fim']}</h6>",
                        "data": row['data'],
                        'status':row['status']
                    }
                    evento["Em revisão"].append(novo_evento)

            for index, row in df.iterrows():
                if row['status'] == 'Completo':
                    novo_evento = {
                        "imagem":'./php/' + row['imagem'],
                        "texto": f"<h3>{row['titulo']}</h3><h6>{row['hora']} - {row['hora_fim']}</h6>",
                        "data": row['data'],
                        'status':row['status']
                    }
                    evento["Completo"].append(novo_evento)
            
            evento_json = json.dumps(evento)
                
            print(evento_json)
        except json.JSONDecodeError as e:
            print("Erro na decodificação JSON:", e)
    except FileNotFoundError:
        print("Arquivo JSON não encontrado.")

if __name__ == "__main__":
    main()
