// Seleção de elementos
const addButton = document.getElementById('add-item-btn');
const inputField = document.getElementById('new-item-input');
const itemList = document.getElementById('item-list');

// Função para adicionar um item à lista
addButton.addEventListener('click', function() {
    const itemName = inputField.value.trim();
    
    if (itemName !== "") {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-form');
        
        const label = document.createElement('label');
        
        const itemIcon = document.createElement('span'); // Usamos um "span" para representar a bolinha
        itemIcon.classList.add('item-icon');
        
        const itemText = document.createElement('span');
        itemText.textContent = itemName;

        // Botão de remover item
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remover item';

        // Mensagem de item removido
        const removeMessage = document.createElement('p');
        removeMessage.classList.add('remove-message');
        removeMessage.textContent = 'O item foi removido da lista';

        // Lógica para remover o item
        removeButton.addEventListener('click', function() {
            itemDiv.appendChild(removeMessage);
            setTimeout(() => {
                itemDiv.remove(); // Remove o item da lista após 2 segundos
            }, 2000); // Delay de 2 segundos
        });

        label.appendChild(itemIcon);
        label.appendChild(itemText);

        // Adicionar a lógica de selecionar/deselecionar
        label.addEventListener('click', function() {
            itemDiv.classList.toggle('selected');
        });

        itemDiv.appendChild(label);
        itemDiv.appendChild(removeButton);
        itemList.appendChild(itemDiv);

        // Limpar o campo de input após adicionar
        inputField.value = '';
    }
});
