function calcular(tipo, valor){

    if(tipo ==='acao'){

      if( valor === 'c'){
        document.getElementById('Resultado').value=''

      }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        
        document.getElementById('Resultado').value += valor

      }
      if (valor === '='){
        var valor_campo = eval(document.getElementById('Resultado').value)

        document.getElementById('Resultado').value = valor_campo
        
      }
      

    }else if(tipo === 'valor'){

      document.getElementById('Resultado').value += valor

    }

  }

