import React from 'react'
import './SearchPage.scss'
import { Button } from '@mui/material'
import SearchResult from '../SearchResult/SearchResult'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>65 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nerby</h1>
                <Button
                    variant='outlined'>
                    Cancelled Flexibility
                </Button>
                <Button
                    variant='outlined'>
                    Price
                </Button>
                <Button
                    variant='outlined'>
                    Rooms and beds
                </Button>
                <Button
                    variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
                star={4.73}
                price='$20 /night'
                total='$119 total'
            />
        </div>
    )
}

export default SearchPage