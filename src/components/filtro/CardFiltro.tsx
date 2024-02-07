interface CardFiltroProps {
    nome: string;
    checked?: boolean;
    onChange: (index: boolean, nome: string) => void;
    
}

function CardFiltro({ nome, checked, onChange }: CardFiltroProps) {

    return (
        <>
            <li id="submenu" className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                <div className="flex items-center ps-3">
                    <input
                        id={nome}
                        type="checkbox"
                        value=""
                        checked={checked}
                        onChange={(e) => onChange(e.target.checked,nome)} 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                        htmlFor={nome}
                        className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                    >
                        {nome}
                    </label>
                </div>
            </li>
        </>
    )
}

export default CardFiltro