import { IconButton } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <IconButton
            className={`custom-arrows custom-arrow__right ${className}`}
            style={{ ...style }}
            onClick={onClick}>
            <NavigateNextIcon className='slick-arrow__next' style={{ fontSize: '30', color: "#7a7a7a" }} />
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
            <NavigateBeforeIcon className='slick-arrow__prev' style={{ fontSize: '30', color: "#7a7a7a" }} />
        </IconButton>
    )
}

const ConfigurationCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    waitForAnimate: false,
    className: "slides",
    nextArrow: <NextArrow to='next' />,
    prevArrow: <PrevArrow to='prev' />,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

export default ConfigurationCarousel