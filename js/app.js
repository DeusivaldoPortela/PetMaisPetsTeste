const produtos = [
    { nome: "Ração Select Cães Pequenos Porte  Sabor Frango- 7,5 kg", imagem: "./img/3333.jpg", preco: "R$ 50,00", whatsapp: "5511940491177" },
    { nome: "Ração Gran Plus Gatos Castrados Sabor Peixe- 10kg", imagem: "./img/1212.jpg", preco: "R$ 80,00", whatsapp: "5511940491177" },
    { nome: "Ração Unna Gatos de Raças Puras - 10kg", imagem: "./img/0189596921947.jpg", preco: "R$ 120,00", whatsapp: "5511940491177" },
    { nome: "Ração Kit Ket Gatos Adultos Sabor Carne- 15 kg", imagem: "./img/0328425954962.jpg", preco: "R$ 100,00", whatsapp: "5511940491177" },
    { nome: "Ração Cão Criador Cães Médio Porte , Sabor Misto (Frango , Carne) - 15kg", imagem: "./img/1062149283246.jpg", preco: "R$ 120,00", whatsapp: "5511940491177" },
    { nome: "Produto 6", imagem: "./img/1392660351777.jpg", preco: "R$ 200,00", whatsapp: "5511940491177" },
    { nome: "Produto 7", imagem: "./img/2149678685640.jpg", preco: "R$ 75,00", whatsapp: "5511940491177" },
    { nome: "Produto 8", imagem: "./img/2214089432745.jpg", preco: "R$ 90,00", whatsapp: "5511940491177" },
    { nome: "Produto 9", imagem: "./img/4028315130586.jpg", preco: "R$ 110,00", whatsapp: "5511940491177" },
    { nome: "Produto 10", imagem: "./img/6255338811404.jpg", preco: "R$ 130,00", whatsapp: "5511940491177" },
    { nome: "Produto 11", imagem: "./img/6255338811404.jpg", preco: "R$ 40,00", whatsapp: "5511940491177" },
    { nome: "Produto 12", imagem: "./img/6766186809694.jpg", preco: "R$ 150,00", whatsapp: "5511940491177" },
    { nome: "Produto 13", imagem: "./img/7469773579069.jpg", preco: "R$ 85,00", whatsapp: "5511940491177" },
    { nome: "Produto 14", imagem: "./img/8262808445773.jpg", preco: "R$ 95,00", whatsapp: "5511940491177" },
   
  ];
  
  
  const container = document.getElementById('produtos');
  
  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
  
    produtoDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>${produto.preco}</p>
      <a href="https://wa.me/${produto.whatsapp}?text=Olá, gostaria de Realizar o Pedido de Compra do Item ${produto.nome}!" target="_blank">
        Comprar no WhatsApp
      </a>
    `;
  
    container.appendChild(produtoDiv);
  });
  