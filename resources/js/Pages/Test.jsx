import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";

export default function Test() {
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const formData = new FormData();
        for (const file of files) {
            formData.append("images", file);
        }
        fetch("/api/image", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setImages(images.concat(data));
            });
    };

    return (
        <AuthenticatedLayout>
            <div>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                />
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`/storage/${image}`}
                        alt="Uploaded Preview"
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
