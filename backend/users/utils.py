import csv
import datetime
from django.http import HttpResponse
from .models import (
                        FishGameTrial, 
                        RankedQualities, 
                        TreeShakingGameTrial, 
                        Profile, 
                        IndividualRankingQualitiesScore, 
                        ActivityFeedback,
                    )



def export_fishgame_trials_csv(request, queryset=None, modeladmin=None):

    if queryset is None:
        queryset = FishGameTrial.objects.all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="fishgametrials.csv"'

    writer = csv.writer(response)

    participants = queryset.values_list('participant__id', 'original_participant_id').distinct().order_by('participant__id')
    trials = FishGameTrial.objects.values_list('trial_number', flat=True).distinct().order_by('trial_number')

    header = ['participantID']
    for trial_number in trials:
        header.append(f'trial{trial_number}_number')
        header.append(f'trial{trial_number}_response')
        header.append(f'trial{trial_number}_responsetime')
    writer.writerow(header)

    participant_responses = {}

    for participant_id, original_participant_id in participants:
        if participant_id:
            participant_responses[participant_id] = {
                'participantID': participant_id,
            }
        elif original_participant_id:
            participant_responses[original_participant_id] = {
                'participantID': original_participant_id,
            }

    for trial in queryset:
        participant_id = trial.participant.id if trial.participant else trial.original_participant_id
        trial_number = trial.trial_number

        if trial_number == 1:
            participant_data = participant_responses.get(participant_id)
            if participant_data:
                data_row = [participant_data['participantID']]
                for trial_num in trials:
                    trial_data = participant_data.get(trial_num)
                    if trial_data:
                        data_row.append(trial_data['number'])
                        data_row.append(trial_data['response'])
                        data_row.append(trial_data['responsetime'])
                    else:
                        data_row.append('')
                        data_row.append('')
                        data_row.append('')
                writer.writerow(data_row)

            participant_responses[participant_id] = {
                'participantID': participant_id,
            }

        if trial_number not in participant_responses[participant_id]:
            participant_responses[participant_id][trial_number] = {
                'number': trial_number,
                'response': 'match' if trial.match else 'nomatch',
                'responsetime': trial.trial_response_time,
            }

    for participant_id, participant_data in participant_responses.items():
        data_row = [participant_data['participantID']]
        for trial_number in trials:
            trial_data = participant_data.get(trial_number)
            if trial_data:
                data_row.append(trial_data['number'])
                data_row.append(trial_data['response'])
                data_row.append(trial_data['responsetime'])
            else:
                data_row.append('')
                data_row.append('')
                data_row.append('')
        writer.writerow(data_row)

    return response

export_fishgame_trials_csv.short_description = 'Export selected trials as CSV'


def export_treeshaking_trials_csv(request, queryset=None, modeladmin=None):

    if queryset is None:
        queryset = TreeShakingGameTrial.objects.all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="treeshakinggametrials.csv"'

    writer = csv.writer(response)

    participants = queryset.values_list('participant__id', 'original_participant_id').distinct().order_by('participant__id')
    trials = TreeShakingGameTrial.objects.values_list('trial_number', flat=True).distinct().order_by('trial_number')

    header = ['participantID']
    for trial_number in trials:
        header.append(f'trial{trial_number}_type')
        header.append(f'trial{trial_number}_denominator')
        header.append(f'trial{trial_number}_answer')
        header.append(f'trial{trial_number}_responsetime')
    writer.writerow(header)

    participant_responses = {}

    for participant_id, original_participant_id in participants:
        if participant_id:
            participant_responses[participant_id] = {
                'participantID': participant_id,
            }
        elif original_participant_id:
            participant_responses[original_participant_id] = {
                'participantID': original_participant_id,
            }

    for trial in queryset:
        participant_id = trial.participant.id if trial.participant else trial.original_participant_id
        trial_number = trial.trial_number

        if trial_number == 1:
            participant_data = participant_responses.get(participant_id)
            if participant_data:
                data_row = [participant_data['participantID']]
                for trial_num in trials:
                    trial_data = participant_data.get(trial_num)
                    if trial_data:
                        data_row.append(trial_data['type'])
                        data_row.append(trial_data['denominator'])
                        data_row.append(trial_data['answer'])
                        data_row.append(trial_data['responsetime'])
                    else:
                        data_row.append('')
                        data_row.append('')
                        data_row.append('')
                        data_row.append('')
                writer.writerow(data_row)

            participant_responses[participant_id] = {
                'participantID': participant_id,
            }

        trial_type = ''
        if trial.shell > 0:
            ratio = trial.shared_shell / (trial.shell / 2)
            if ratio == 1:
                trial_type = 'equal'
            elif ratio < 1:
                trial_type = 'unequal_adv'
            elif ratio > 1:
                trial_type = 'unequal_disadv'

        if trial_number not in participant_responses[participant_id]:
            participant_responses[participant_id][trial_number] = {
                'type': trial_type,
                'denominator': trial.shell,
                'answer': 'accept' if trial.response else 'reject',
                'responsetime': trial.trial_response_time,
            }

    for participant_id, participant_data in participant_responses.items():
        data_row = [participant_data['participantID']]
        for trial_number in trials:
            trial_data = participant_data.get(trial_number)
            if trial_data:
                data_row.append(trial_data['type'])
                data_row.append(trial_data['denominator'])
                data_row.append(trial_data['answer'])
                data_row.append(trial_data['responsetime'])
            else:
                data_row.append('')
                data_row.append('')
                data_row.append('')
                data_row.append('')
        writer.writerow(data_row)

    return response

export_treeshaking_trials_csv.short_description = 'Export selected trials as CSV'


def export_rankedqualities_csv(request, queryset=None, modeladmin=None):
    if queryset is None:
        queryset = RankedQualities.objects.all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="rankedqualities.csv"'

    writer = csv.writer(response)

    quality_choices = dict(RankedQualities.quality_choices)
    category_choices = dict(RankedQualities.category_choices)

    header = ['participant']
    for category in category_choices.values():
        for quality in quality_choices.values():
            header.append(f'{category} - {quality}')
    writer.writerow(header)

    participant_rankings = {}

    for ranked_quality in queryset:
        participant_id = ranked_quality.participant_id if ranked_quality.participant else ranked_quality.original_participant_id
        quality = quality_choices[ranked_quality.quality]
        category = category_choices[ranked_quality.category]
        rank = ranked_quality.rank

        if participant_id not in participant_rankings:
            if ranked_quality.participant:
                participant_id = ranked_quality.participant.id
            participant_rankings[participant_id] = {
                'participant': participant_id,
            }

        if category not in participant_rankings[participant_id]:
            participant_rankings[participant_id][category] = {}

        participant_rankings[participant_id][category][quality] = rank

    for participant_id, participant_data in participant_rankings.items():
        data_row = [participant_data['participant']]
        for category in category_choices.values():
            for quality in quality_choices.values():
                rank = participant_data.get(category, {}).get(quality, '')
                data_row.append(rank)
        writer.writerow(data_row)

    return response

export_rankedqualities_csv.short_description = 'Export selected trials as CSV'


def export_scores_csv(request, queryset=None, modeladmin=None):
    if queryset is None:
        queryset = IndividualRankingQualitiesScore.objects.all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="individual_ranking_qualities_scores.csv"'

    writer = csv.writer(response)

    unique_questions = set()
    for score in queryset:
        if score.question:
            unique_questions.add(score.question.question_text)
        if score.original_question_text:
            unique_questions.add(score.original_question_text)

    tell_us_about_you_questions = list(unique_questions)

    header = ['participant']
    header.extend(tell_us_about_you_questions)
    writer.writerow(header)

    participant_data = {}

    for score in queryset:
        participant_id = score.participant_id if score.participant else score.original_participant_id
        question_text = score.question.question_text if score.question else score.original_question_text
        score_value = score.score

        if participant_id not in participant_data:
            participant_data[participant_id] = {}

        if not question_text or question_text not in tell_us_about_you_questions:
            question_text = score.original_question_text  # Get question_text from original_question_text

        if question_text:
            participant_data[participant_id][question_text] = score_value

    for participant_id, data in participant_data.items():
        row = [participant_id]
        for question in tell_us_about_you_questions:
            row.append(data.get(question, ''))
        writer.writerow(row)

    return response


export_scores_csv.short_description = 'Export selected trials as CSV'


def calculate_age(birth_month, birth_year):
    current_date = datetime.date.today()
    
    if birth_year is None:
        return None
    
    age = current_date.year - birth_year
    if current_date.month < birth_month:
        age -= 1
    return age

def export_profile_csv(request, queryset=None, modeladmin=None):
    if queryset is None:
        queryset = Profile.objects.all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="profiles.csv"'

    writer = csv.writer(response)

    header = ['participant', 'age', 'nationality', 'gender', 'zipcode']
    writer.writerow(header)

    for profile in queryset:
        participant = profile.participant.username
        birth_month = profile.birth_month
        birth_year = profile.birth_year
        age = calculate_age(birth_month, birth_year)
        nationality = profile.nationality
        gender = profile.gender
        zipcode = profile.zipcode
        writer.writerow([participant, age if age is not None else '', nationality, gender, zipcode])

    return response