import StoreContext from "./StoreContext";
const StoreContextProvider = (props) => {
  const contextvalues ={
    products: [
      {
        "id": 1,
        "title": "Vinyl Record: 'Harmony in Motion'",
        "price": 30.99,
        "imageUrl": "https://cdn.shopify.com/s/files/1/0464/5951/9144/products/PIMVinylSplatter_250x250@2x.jpg?v=1667592485",
        "description": "Immerse yourself in the mesmerizing tunes of 'Harmony in Motion,' the latest album from Generic. This vinyl record is a must-have for music enthusiasts.",
        "reviews": [
          {
            "username": "VinylCollector",
            "review": "The sound quality of this vinyl is exceptional. A true gem for my collection.",
            "rating": 5.0
          },
          {
            "username": "MusicLover123",
            "review": "I can't get enough of this album! A masterpiece.",
            "rating": 5.0
          }
        ]
      },
      {
        "id": 2,
        "title": "Concert Tickets: 'Living in Harmony' Tour",
        "price": 60.00,
        "imageUrl": "https://cdn-az.allevents.in/events5/banners/8094882514114ebfbdcf0fde17d4913b177e8566d7a09643c1709acde7a0a085-rimg-w1200-h1698-gmir.jpg?v=1693312571",
        "description": "Experience the magic of Generic's 'Live in Harmony' Tour. Get your tickets now and be part of an unforgettable music night!",
        "reviews": [
          {
            "username": "ConcertGoer",
            "review": "The concert was mind-blowing! I can't wait to see them again.",
            "rating": 5.0
          },
          {
            "username": "MusicFanatic",
            "review": "The energy in that concert was electric. I danced all night!",
            "rating": 5.0
          }
        ]
      },
      
      {
        "id": 3,
        "title": "Sheet Music: 'Just Leave It To Me' Songbook",
        "price": 14.99,
        "imageUrl": "https://digitalcommons.usf.edu/aa_sheet_music/1018/preview.jpg",
        "description": "Play your favorite Generic songs with the 'Harmony in Motion' songbook. Includes sheet music for all tracks from the album.",
        "reviews": [
          {
            "username": "MusicianAtHeart",
            "review": "I've been playing these songs on my piano, and they sound amazing!",
            "rating": 4.5
          },
          {
            "username": "SheetMusicFan",
            "review": "The arrangements are spot on. I can't stop playing them!",
            "rating": 5.0
          }
        ]
      }
      ,
      {
        "id": 4,
        "title": "Generic's Greatest Hits CD Collection",
        "price": 29.99,
        "imageUrl": "https://images-cdn.ubuy.co.in/64562ab7fa1fbf78fe2d372e-greatest-hits.jpg",
        "description": "Relive the magic of Generic with this special collection of their greatest hits on CDs. A must-have for any die-hard fan!",
        "reviews": [
          {
            "username": "CDCollector",
            "review": "I can't believe I finally have all their hits in one collection. Fantastic!",
            "rating": 5.0
          },
          {
            "username": "MusicAficionado",
            "review": "The sound quality is impeccable. A true treasure for music lovers.",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 5,
        "title": "Generic Acoustic Sessions",
        "price": 25.99,
        "imageUrl": "https://cornexchangemanchester.co.uk/wp-content/uploads/2023/06/thursday-night-live-generic.jpg",
        "description": "Experience the raw and intimate side of Generic with their 'Acoustic Sessions' album. Immerse yourself in acoustic renditions of your favorite songs.",
        "reviews": [
          {
            "username": "AcousticLover",
            "review": "These acoustic versions are simply beautiful. A perfect album to unwind with.",
            "rating": 5.0
          },
          {
            "username": "MusicSoul",
            "review": "I can't stop listening to this album. It's like rediscovering their music all over again.",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 6,
        "title": "Generic Live in Concert: 'Epic Night'",
        "price": 35.00,
        "imageUrl": "https://img.freepik.com/premium-vector/indie-night-rock-music-party-concert-flyer-design-template-with-black-guitar-silhouette_148087-445.jpg?w=2000",
        "description": "Relive the epic energy of Generic's live concert with this electrifying 'Live in Concert: Epic Night' album. Feel like you're in the front row!",
        "reviews": [
          {
            "username": "ConcertAddict",
            "review": "This album captures the magic of their live performance. I can't get enough!",
            "rating": 5.0
          },
          {
            "username": "LiveMusicFanatic",
            "review": "I was at that concert, and this album takes me right back. An absolute must for fans!",
            "rating": 4.5
          }
        ]
      }
      
    ],
    merch: [
      {
        "id": 1,
        "title": "Band T-Shirt: 'United By Harmony'",
        "price": 24.99,
        "imageUrl": "https://i.etsystatic.com/39999554/r/il/48a4a2/4719271030/il_fullxfull.4719271030_cipy.jpg",
        "description": "Show your love for Generic with this stylish 'Harmony in Motion' band T-shirt. Available in various sizes.",
        "reviews": [
          {
            "username": "TShirtEnthusiast",
            "review": "I wear this T-shirt with pride. The design is awesome!",
            "rating": 5.0
          },
          {
            "username": "MusicMerchCollector",
            "review": "Great quality shirt. Fits perfectly!",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 2,
        "title": "Coffee Mug: 'The Melody Maker'",
        "price": 12.99,
        "imageUrl": "https://yt3.googleusercontent.com/Ez50r7hSkqk_TUhA1Seq2kbferdd6VjdLRLSOfORqsbvVp846fvMk4W1oxv9QxZy6RbhsS6v1A=s900-c-k-c0x00ffffff-no-rj",
        "description": "Start your day with a cup of coffee in this 'Melody Maker' mug. It's the perfect way to kickstart your creative mornings.",
        "reviews": [
          {
            "username": "CoffeeArtiste",
            "review": "This mug inspires me every morning. I love it!",
            "rating": 5.0
          },
          {
            "username": "MugAddict",
            "review": "I've got quite a collection, but this one's my new favorite.",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 3,
        "title": "Guitar Pick Set: Generic Signature Series",
        "price": 9.99,
        "imageUrl": "https://i.etsystatic.com/26178239/r/il/d6c26a/4466404939/il_340x270.4466404939_2n1c.jpg",
        "description": "Play like a pro with the Generic Signature Series guitar picks. These picks provide exceptional grip and tone.",
        "reviews": [
          {
            "username": "GuitarHero",
            "review": "These picks have improved my guitar playing. They're fantastic!",
            "rating": 5.0
          },
          {
            "username": "PickCollector",
            "review": "I collect guitar picks, and these are now the crown jewels of my collection.",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 4,
        "title": "Guitar: 'Melody Maker'",
        "price": 599.99,
        "imageUrl": "https://www.blueillustration.ca/cdn/shop/products/il_fullxfull.2930385946_bjlm_1024x1024.jpg?v=1621651828",
        "description": "Get ready to rock with the 'Melody Maker' guitar, the same model used by Generic's lead guitarist. Perfect for both beginners and pros.",
        "reviews": [
          {
            "username": "GuitarPro",
            "review": "This guitar feels amazing in my hands. It's a dream come true.",
            "rating": 5.0
          },
          {
            "username": "RockStarWannabe",
            "review": "I've been practicing on this guitar, and it's improved my skills so much!",
            "rating": 4.5
          }
        ]
      },
      {
        "id": 5,
        "title": "Generic Band Logo Cap",
        "price": 14.99,
        "imageUrl": "https://ih1.redbubble.net/image.4877571033.7476/ssrco,dad_hat,product,FFFDF5:8c3db69414,front,square,600x600-bg,f8f8f8.jpg",
        "description": "Complete your look with the official Generic Band Logo Cap. Stylish and comfortable, it's perfect for concerts and everyday wear.",
        "reviews": [
          {
            "username": "CapFan",
            "review": "I wear this cap everywhere, and it's become my signature look!",
            "rating": 5.0
          },
          {
            "username": "MusicHead",
            "review": "Great quality cap with an awesome logo. I'm a fan!",
            "rating": 4.5
          }
        ]
      }
      ,
      {
        "id": 6,
        "title": "Generic Band Poster",
        "price": 15.99,
        "imageUrl": "https://ih1.redbubble.net/image.3062676273.8609/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
        "description": "Decorate your room with this stunning Generic Band Poster. It's a must-have for every true fan of the band.",
        "reviews": [
          {
            "username": "PosterEnthusiast",
            "review": "This poster is now the centerpiece of my music-themed room. Love it!",
            "rating": 5.0
          },
          {
            "username": "BandFanatic",
            "review": "I've been waiting for a poster like this. Great quality!",
            "rating": 4.5
          }
        ]
      }
    ]
  }
  ;
  return (
    <StoreContext.Provider value={contextvalues}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
