// Удаляем карточку со страницы

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        const button =
            card.querySelector(
                `button[onclick="deleteProduct(${id})"]`
            );


        if (button) {

            card.remove();
        }

    });

}