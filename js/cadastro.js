document.getElementById('CEP').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    if (cep.length === 8) {
      // Faz a requisição à API ViaCEP
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          if (!response.ok) throw new Error('CEP não encontrado!');
          return response.json();
        })
        .then(data => {
          if (data.erro) {
            alert('CEP inválido!');
            return;
          }
          // Preenche os campos com os dados retornados
          document.getElementById('endereco').value = data.logradouro || '';
          document.getElementById('Bairro').value = data.bairro || '';
          document.getElementById('Cidade').value = data.localidade || '';

          // Adicione outros campos, como cidade ou estado, se necessário
        })
        .catch(() => {
          alert('Erro ao buscar o CEP. Tente novamente.');
        });
    } else {
      alert('CEP inválido. O CEP deve ter 8 dígitos.');
    }
  });
  