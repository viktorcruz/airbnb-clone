import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";

export const useCarousel = () => {
    const [addFavorite, setAddFavorite] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return {
        addFavorite,
        setAddFavorite,
        dialogOpen,
        handleCloseDialog,
        handleOpenDialog
    }
}

export const useSliderSettings = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <IconButton
                className={`custom-arrows custom-arrow__right ${className}`}
                style={{ ...style }}
                onClick={onClick}>
                <NavigateNextIcon className='slick-arrow__next' style={{ fontSize: '30' }} />
            </IconButton>
        )
    }
    const PrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <IconButton
                className={`custom-arrows custom-arrow__left ${className}`}
                style={{ ...style }}
                onClick={onClick}>
                <NavigateBeforeIcon className='slick-arrow__prev' style={{ fontSize: '30' }} />
            </IconButton>
        )
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        className: "slides",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return settings;
}