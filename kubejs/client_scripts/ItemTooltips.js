ItemEvents.modifyTooltips(event => {

    event.add('pipez:improved_upgrade', Text.translate('tooltip.pipez.improved_upgrade').red())

    event.modify('oritech:fluxite', tooltip => {
        tooltip.removeLine(1);
    });

    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        for (let i = 0; i < text.size(); i++) {
            let line = text.get(i)
            let str = line.getString()
            
            if (str.contains('\n')) {
                let parts = str.split('\n')
                
                text.set(i, Text.of(parts[0]).style(line.style))
                
                for (let j = 1; j < parts.length; j++) {
                    text.add(i + j, Text.of(parts[j]).style(line.style))
                }
            }
        }
    });

})
