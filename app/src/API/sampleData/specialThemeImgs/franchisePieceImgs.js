import {star_wars} from "./themes/star_wars";
import {mechwarrior_a_team} from "./themes/mechwarrior_a_team";
import {mechwarrior_b_team} from "./themes/mechwarrior_b_team";
import {NBA} from "./themes/NBA";
import {red_blue} from "./themes/red_blue";

export const franchisePieceImgs = {
    star_wars: {
        Rook: {W: star_wars["b-wing.PNG"], B: star_wars["tie-bomber.png"]},
        Knight: {W: star_wars["y-wing.PNG"], B: star_wars["tie-defender.png"]},
        Bishop: {W: star_wars["a-wing.PNG"], B: star_wars["tie-interceptor.png"]},
        King: {W: star_wars["rebel-fleet-ship.PNG"], B: star_wars["star-destroyer.PNG"]},
        Queen: {W: star_wars["millenium-falcon.png"], B: star_wars["darth-vader-tie-fighter.PNG"]},
        Pawn: {W: star_wars["x-wing.png"], B: star_wars["tie-fighter.PNG"]},
    },
    mechwarrior_a_team: {
        Rook: {
            W: mechwarrior_a_team["timberwolf-white.svg"], 
            B: mechwarrior_a_team["timberwolf-black.svg"]
        },
        Knight: {
            W: mechwarrior_a_team["hellbringer-white.svg"], 
            B: mechwarrior_a_team["hellbringer-black.svg"]
        },
        Bishop: {
            W: mechwarrior_a_team["summoner-white.svg"], 
            B: mechwarrior_a_team["summoner-black.svg"]
        },
        King: {
            W: mechwarrior_a_team["gargoyal-white.svg"], 
            B: mechwarrior_a_team["gargoyal-black.svg"]
        },
        Queen: {
            W: mechwarrior_a_team["warhammer-white.svg"], 
            B: mechwarrior_a_team["warhammer-black.svg"]
        },
        Pawn: {
            W: mechwarrior_a_team["maddog-white.svg"], 
            B: mechwarrior_a_team["maddog-black.svg"]
        },
    },
    mechwarrior_b_team: {
        Rook: {
            W: mechwarrior_b_team["maurader-white.svg"],
            B: mechwarrior_b_team["maurader-black.svg"]
        },
        Knight: {
            W: mechwarrior_b_team["kitfox-white.svg"],
            B: mechwarrior_b_team["kitfox-black.svg"]
        },
        Bishop: {
            W: mechwarrior_b_team["rifleman-white.svg"],
            B: mechwarrior_b_team["rifleman-black.svg"]
        },
        King: {
            W: mechwarrior_b_team["jenner-white.svg"],
            B: mechwarrior_b_team["jenner-black.svg"]
        },
        Queen: {
            W: mechwarrior_b_team["direwolf-white.svg"],
            B: mechwarrior_b_team["direwolf-black.svg"]
        },
        Pawn: {
            W: mechwarrior_b_team["firemoth-white.svg"],
            B: mechwarrior_b_team["firemoth-black.svg"]
        },
    },
    NBA: {
        Rook: {
            W: NBA['jordan-white.png'],
            B: NBA['jordan-black.png']
        },
        Knight: {
            W: NBA['lebron-white.png'],
            B: NBA['lebron-black.png']
        },
        Bishop: {
            W: NBA['kobe-white.png'],
            B: NBA['kobe-black.png']
        },
        King: {
            W: NBA['hoop-white.svg'],
            B: NBA['hoop-black.svg']
        },
        Queen: {
            W: NBA['goat-white.png'],
            B: NBA['goat-black.png']
        },
        Pawn: {
            W: NBA['nba-logo-white.svg'],
            B: NBA['nba-logo-black.svg']
        },
    },
    red_blue: {
        Rook: {
            W: red_blue["WR.svg"],
            B: red_blue["BR.svg"]
        },
        Knight: {
            W: red_blue["WN.svg"],
            B: red_blue["BN.svg"]
        },
        Bishop: {
            W: red_blue["WB.svg"],
            B: red_blue["BB.svg"]
        },
        King: {
            W: red_blue["WK.svg"],
            B: red_blue["BK.svg"]
        },
        Queen: {
            W: red_blue["WQ.svg"],
            B: red_blue["BQ.svg"]
        },
        Pawn: {
            W: red_blue["WP.svg"],
            B: red_blue["BP.svg"]
        },
    },
}