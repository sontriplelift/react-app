import { useEffect, useState } from "react";

function PreviewAvatar() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);

        e.target.value = null;
    }

    return (
        <div>
            <div>
                <input
                    type="file"
                    onChange={handlePreviewAvatar}
                />
            </div>
            {avatar && (
                <img src={avatar.preview} width="500px" />
            )}
        </div>
    )
}

export default PreviewAvatar;