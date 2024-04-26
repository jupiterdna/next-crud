'use client'

import { handleDelete } from "./action"

type EditButtonType = {
    id: string
}



export default function DeleteButton({  id }: EditButtonType) {
    return (
        <button onClick={() => {
            handleDelete(id)
        }} className="text-red-400">Delete</button>
    )
}